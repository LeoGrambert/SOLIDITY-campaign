import { Button } from 'semantic-ui-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Layout from '../../../../components/Core/Layout';

const CampaignRequestsPage = () => {
  const { query } = useRouter();
  const address = query.address;

  return (
    <Layout>
      <h3>Requests</h3>
      <Link href={`/campaigns/${address}/requests/new`} legacyBehavior>
        <a>
          <Button primary>Create a Request</Button>
        </a>
      </Link>
    </Layout>
  );
};

export default CampaignRequestsPage;
