import Presentor from './Presentor';
import { Provider } from '@context/Documents';
import Layout from '@components/Layout';

const Documents = () => {

  return <Provider>
    <Layout>
      <Presentor />
    </Layout>
  </Provider>;
};

export default Documents;
