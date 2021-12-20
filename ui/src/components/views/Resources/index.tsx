import Presentor from './Presentor';
import { Provider } from '@context/Resources';
import Layout from '@components/Layout';

const Resources = () => {

  return <Provider>
    <Layout>
      <Presentor />
    </Layout>
  </Provider>;
};

export default Resources;
