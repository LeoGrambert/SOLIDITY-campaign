import { useRouter } from 'next/router';

import Layout from '../../components/Core/Layout';

const CampaignPage = () => {
  const { query } = useRouter();
  const address = query.address;

  return (
    <Layout>
      <h3>{`Campaign: ${address}`}</h3>
    </Layout>
  );
};

export default CampaignPage;
