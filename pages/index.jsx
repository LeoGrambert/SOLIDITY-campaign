import 'semantic-ui-css/semantic.min.css'

import factory from '../ethereum/factory';
import ListCampaigns from "../components/Campaigns/ListCampaigns";
import Layout from '../components/Core/Layout';

const Campaigns = ({ campaigns }) => {

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
      campaigns
    }
  }
}

export default Campaigns;