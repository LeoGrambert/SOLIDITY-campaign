import { useState } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { useRouter } from 'next/router';

import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';

const NewRequest = ({ address }) => {
  const router = useRouter();

  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [recipient, setRecipient] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);
    try {
      const campaign = Campaign(address);
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.createRequest(description, web3.utils.toWei(value, 'ether'), recipient).send({
        from: accounts[0],
      });
      router.push(`/campaigns/${address}/requests`);
    } catch (err) {
      setErrorMsg(err.message);
    }
    setIsLoading(false);
  };

  return (
    <Form onSubmit={(e) => handleOnSubmit(e)} error={errorMsg !== ''}>
      <Form.Field>
        <label>Description</label>
        <Input value={description} onChange={(e) => setDescription(e.target.value)} />
        <label>Value in Ether</label>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <label>Recipient</label>
        <Input value={recipient} onChange={(e) => setRecipient(e.target.value)} />
      </Form.Field>
      <Message error header='Oops...' content={errorMsg} />
      <Button type='submit' loading={isLoading} primary>
        Create
      </Button>
    </Form>
  );
};

export default NewRequest;
