import { Card, Button } from 'semantic-ui-react';
import Link from 'next/link';

const ListCampaigns = ({ campaigns }) => {
  const items = campaigns.map((address) => ({
    header: address,
    description: (
      <Link href={`/campaigns/${address}`} passHref>
        View campaign
      </Link>
    ),
    fluid: true,
  }));

  return (
    <>
      <h3>Open Campaigns</h3>
      <Link href='/campaigns/new' passHref>
        <Button floated='right' content='Create Campaign' icon='add square' primary />
      </Link>
      <Card.Group items={items} />
    </>
  );
};

export default ListCampaigns;
