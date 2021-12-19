import Presentor from './Presentor';
import { Provider } from '@context/Drawings';
import Layout from '@components/Layout';

const Drawings = () => {

  return <Provider>
    <Layout>
      <Presentor />
    </Layout>
  </Provider>;
};

export default Drawings;
