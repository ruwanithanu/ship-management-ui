import PropTypes from 'prop-types';

import { Vessel } from '@/types';
import SC from './style';

interface Props {
  vessel: Vessel;
};

const VesselItem = ({ vessel }: Props) => {
  return <SC.ItemLabelContainer>
    <SC.InnerLeftContainer>
      <SC.NameContainer>{vessel.name}</SC.NameContainer>
      <SC.FleetContainer>{vessel.imo}</SC.FleetContainer>
    </SC.InnerLeftContainer>
    {/* <SC.InnerRightContainer>
      <SC.Circle />
    </SC.InnerRightContainer> */}
  </SC.ItemLabelContainer>;
};

VesselItem.propTypes = {
  vessel: PropTypes.object.isRequired
};

export default VesselItem;
