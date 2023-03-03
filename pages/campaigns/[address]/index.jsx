import { useRouter } from 'next/router';
import { Grid, Button } from 'semantic-ui-react';
import Link from 'next/link';

import Layout from '../../../components/Core/Layout';
import getCampaign from '../../../ethereum/campaign';
import Cards from '../../../components/Campaign/Cards';
import ContributeForm from '../../../components/Campaign/ContributeForm';

const CampaignPage = ({ minimumContribution, balance, requestsCount, approversCount, manager }) => {
  const { query } = useRouter();
  const address = query.address;

  return (
    <Layout>
      <h3>{`Campaign Show - ${address}`}</h3>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <Cards
              minimumContribution={minimumContribution}
              balance={balance}
              requestsCount={requestsCount}
              approversCount={approversCount}
              manager={manager}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address={address} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Link href={`/campaigns/${address}/requests`} legacyBehavior>
              <a>
                <Button primary>View Requests</Button>
              </a>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
