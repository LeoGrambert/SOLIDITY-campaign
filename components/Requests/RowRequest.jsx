import { Table, Button, Message } from 'semantic-ui-react';
import { useState } from 'react';

import web3 from '../../ethereum/web3';
import Campaign from '../../ethereum/campaign';

const RowRequest = ({ request, address, id, approversCount }) => {
  const [messageApprove, setMessageApprove] = useState('');
  const [loadingApprove, setLoadingApprove] = useState(false);
  const [messageFinalize, setMessageFinalize] = useState('');
  const [loadingFinalize, setLoadingFinalize] = useState(false);
  const { Row, Cell } = Table;
  const readyToFinalize = request.approvalCount > approversCount / 2;

  const onApprove = async () => {
    setMessageApprove('');
    setLoadingApprove(true);
    try {
      const campaign = Campaign(address);
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.approveRequest(id).send({
        from: accounts[0],
      });
    } catch (err) {
      setMessageApprove(err.message);
    }
    setLoadingApprove(false);
  };

  const onFinalize = async () => {
    setMessageFinalize('');
    setLoadingFinalize(true);
    try {
      const campaign = Campaign(address);
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.finalizeRequest(id).send({
        from: accounts[0],
      });
    } catch (err) {
      setMessageFinalize(err.message);
    }
    setLoadingFinalize(false);
  };

  return (
    <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
      <Cell>{id + 1}</Cell>
      <Cell>{request.description}</Cell>
      <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
      <Cell>{request.recipient}</Cell>
      <Cell>
        {request.approvalCount}/{approversCount}
      </Cell>
      <Cell>
        {request.complete ? null : (
          <Button color='green' loading={loadingApprove} basic onClick={() => onApprove()}>
            Approve
          </Button>
        )}
        {messageApprove?.length > 0 && <Message error header='Oops...' content={messageApprove} />}
      </Cell>
      <Cell>
        {request.complete ? null : (
          <Button color='teal' loading={loadingFinalize} basic onClick={() => onFinalize()}>
            Finalize
          </Button>
        )}
        {messageFinalize?.length > 0 && <Message error header='Oops...' content={messageFinalize} />}
      </Cell>
    </Row>
  );
};

export default RowRequest;
