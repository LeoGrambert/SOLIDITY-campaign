import Layout from '../../components/Core/Layout';
import NewCampaignForm from '../../components/NewCampaign/NewCampaignForm';

const CampaignNewPage = () => {
  return (
    <Layout>
      <h3>Create a Campaign</h3>
      <NewCampaignForm />
    </Layout>
  );
};

export default CampaignNewPage;
