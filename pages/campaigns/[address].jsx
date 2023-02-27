import { useRouter } from 'next/router';

import Layout from '../../components/Core/Layout';
import getCampaign from '../../ethereum/campaign';
import Cards from '../../components/Campaign/Cards';

const CampaignPage = ({ minimumContribution, balance, requestsCount, approversCount, manager }) => {
  const { query } = useRouter();
  const address = query.address;
  console.log();
  return (
    <Layout>
      <h3>{`Campaign Show - ${address}`}</h3>
      <Cards
        minimumContribution={minimumContribution}
        balance={balance}
        requestsCount={requestsCount}
        approversCount={approversCount}
        manager={manager}
      />
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const campaign = getCampaign(query.address);
  const summary = await campaign.methods.getSummary().call();

  return {
    props: {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
    },
  };
}

export default CampaignPage;
