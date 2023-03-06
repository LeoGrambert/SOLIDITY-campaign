import { Table } from 'semantic-ui-react';
import RowRequest from './RowRequest';

const TableRequest = ({ requests, address, approversCount }) => {
  const { Header, Row, HeaderCell, Body } = Table;

  const renderRows = () =>
    requests.map((request, index) => (
      <RowRequest key={index} request={request} address={address} id={index} approversCount={approversCount} />
    ));

  return (
    <Table>
      <Header>
        <Row>
          <HeaderCell>ID</HeaderCell>
          <HeaderCell>Description</HeaderCell>
          <HeaderCell>Amount</HeaderCell>
          <HeaderCell>Recipient</HeaderCell>
          <HeaderCell>Approval Count</HeaderCell>
          <HeaderCell>Approve</HeaderCell>
          <HeaderCell>Finalize</HeaderCell>
        </Row>
      </Header>
      <Body>{renderRows()}</Body>
    </Table>
  );
};

export default TableRequest;
