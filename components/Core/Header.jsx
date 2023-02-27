import { Menu } from 'semantic-ui-react';
import Link from 'next/link';

const Header = () => {
  return (
    <Menu style={{ marginTop: '4em' }}>
      <Link href='/' legacyBehavior>
        <a className='item'>KickstarterCoin</a>
      </Link>
      <Menu.Menu position='right'>
        <Link href='/' legacyBehavior>
          <a className='item'>Campaigns</a>
        </Link>
        <Link href='/campaigns/new' legacyBehavior>
          <a className='item'>+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
