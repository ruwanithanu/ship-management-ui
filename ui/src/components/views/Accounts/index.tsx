import Presentor from './Presentor';
import { Provider } from '@context/Accounts';
import Layout from '@components/Layout';

const Accounts = () => {

  return <Provider>
    <Layout>
      <Presentor />
    </Layout>
  </Provider>;
};

export default Accounts;
