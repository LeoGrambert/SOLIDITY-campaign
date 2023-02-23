import { Card, Button } from 'semantic-ui-react'

const ListCampaigns = ({ campaigns }) => {

    const items = campaigns.map(address => ({
        header: address,
        description: <a>View Campaign</a>,
        fluid: true
    }));

    return (
        <>
            <h3>Open Campaigns</h3>
            <Button
                floated="right"
                content="Create Campaign"
                icon="add square"
                primary
            />
            <Card.Group items={items} />
        </>
    );
}

export default ListCampaigns;