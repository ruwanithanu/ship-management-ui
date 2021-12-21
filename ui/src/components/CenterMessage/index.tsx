import PropTypes from 'prop-types';

import SC from './style';

interface Props {
  children?: any;
};

const CenterMessage = ({ children }: Props) => {

  return <SC.Container>
    <SC.Message>
      {children}
    </SC.Message>
  </SC.Container>
};

CenterMessage.propTypes = {
  message: PropTypes.any
};

export default CenterMessage;
