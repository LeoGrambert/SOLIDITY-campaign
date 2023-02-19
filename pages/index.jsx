import React from "react";
import factory from '../ethereum/factory';

const Campaigns = ({ campaigns }) => {

  return (
    <>
      <h1>Campaigns Index</h1>
      {campaigns.length > 0 && <div>{JSON.stringify(campaigns)}</div>}
    </>
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