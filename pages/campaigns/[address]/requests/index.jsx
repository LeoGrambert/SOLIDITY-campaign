import { Button } from 'semantic-ui-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Layout from '../../../../components/Core/Layout';
import Campaign from '../../../../ethereum/campaign';
import TableRequest from '../../../../components/Requests/TableRequest';

const CampaignRequestsPage = ({ requests, approversCount }) => {
  const { query } = useRouter();
  const address = query.address;

  return (
    <Layout>
      <h3>Requests</h3>
      <Link href={`/campaigns/${address}/requests/new`} legacyBehavior>
        <a>
          <Button primary floated={'right'} style={{ marginBottom: '1rem' }}>
            Create a Request
          </Button>
        </a>
      </Link>
      <TableRequest requests={requests} address={address} approversCount={approversCount} />
      <div>{`Found ${requests.length} request${requests.length > 1 ? 's' : ''}`}</div>
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const address = query.address;
  const campaign = Campaign(address);
  const requestCount = await campaign.methods.getRequestsCount().call();
  const requests = await Promise.all(
    Array(parseInt(requestCount))
      .fill()
      .map((element, index) => campaign.methods.requests(index).call())
  );
  const approversCount = await campaign.methods.approversCount().call();

  return {
    props: {
      requests: JSON.parse(JSON.stringify(requests)),
      approversCount,
    },
  };
}

export default CampaignRequestsPage;
