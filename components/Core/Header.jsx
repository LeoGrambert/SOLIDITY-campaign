import { Menu } from 'semantic-ui-react'

const Header = () => {
    return (
        <Menu style={{ marginTop: '4em' }}>
            <Menu.Item>
                KickstartCoin
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    Campaigns
                </Menu.Item>
                <Menu.Item>
                    +
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}

export default Header;