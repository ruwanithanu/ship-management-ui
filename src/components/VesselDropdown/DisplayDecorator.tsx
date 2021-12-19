import { MouseEventHandler } from 'react';
import PropTypes from 'prop-types';

import SC from './style';

interface Props {
  isOpen: boolean;
  children: any;
  onClick: MouseEventHandler;
}

const Decorator = ({ isOpen, onClick = () => {}, children }: Props) => {

  return <SC.HeadContainer isOpen={isOpen} onClick={onClick}>
    <SC.IconContainer>
      <SC.Icon />
    </SC.IconContainer>
    <SC.LabelContainer>{ children }</SC.LabelContainer>
  </SC.HeadContainer>;
};

Decorator.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.any,
  onClick: PropTypes.func
};

export default Decorator;
