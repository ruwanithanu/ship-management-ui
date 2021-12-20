import Presentor from './Presentor';
import { Provider } from '@context/Reports';
import { Provider as SliderProvider } from '@context/Slider';
import Layout from '@components/Layout';

const Reports = () => {

  return <Provider>
    <SliderProvider>
      <Layout>
        <Presentor />
      </Layout>
    </SliderProvider>
  </Provider>;
};

export default Reports;
