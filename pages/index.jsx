import factory from '../ethereum/factory';
import ListCampaigns from '../components/Campaigns/ListCampaigns';
import Layout from '../components/Core/Layout';

const CampaignsPage = ({ campaigns }) => {
  return (
    <Layout>
      {campaigns.length > 0 && (
        <div>
          <ListCampaigns campaigns={campaigns} />
        </div>
      )}
    </Layout>
  );
};

export async function getServerSideProps() {
  const campaigns = await factory.methods.getDeployedCampaigns().call();

  return {
    props: {
      campaigns,
    },
  };
}

export default CampaignsPage;
