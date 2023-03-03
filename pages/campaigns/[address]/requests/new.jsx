import { useRouter } from 'next/router';
import Link from 'next/link';

import Layout from '../../../../components/Core/Layout';
import NewRequest from '../../../../components/Requests/NewRequest';

const NewRequestPage = () => {
  const { query } = useRouter();
  const address = query.address;

  return (
    <Layout>
      <Link href={`/campaigns/${address}/requests`} legacyBehavior>
        <a>Back</a>
      </Link>
      <h3>Create a Request</h3>
      <NewRequest address={address} />
    </Layout>
  );
};

export default NewRequestPage;
