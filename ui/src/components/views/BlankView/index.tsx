import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { Spinner } from '@angloeastern/react-components';
import { useVessels } from '@context/Vessels';
import SC from './style';

interface Props {
  view?: string;
};

const BlankView = ({ view }: Props) => {
  const { t, ready } = useTranslation();
  const { state: { vessel } } = useVessels();

  if (!ready) return <Spinner />;

  return <SC.Container>
    <SC.Message>
      {!view && (vessel ? t('text.selectedVessel', { name: vessel.name }) : t('text.selectVessel'))}
      {view && t('text.selectVesseltoViewDrive', { drive: view })}
    </SC.Message>
  </SC.Container>
};

BlankView.propTypes = {
  view: PropTypes.string
};

export default BlankView;
