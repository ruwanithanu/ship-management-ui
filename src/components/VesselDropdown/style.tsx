import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/pro-light-svg-icons';
import Icon from '@components/Icon';
import { DropdownStyles } from '@angloeastern/react-components';

const { Header, ListItem } = DropdownStyles;

interface HeadContainerProps {
  isOpen: boolean;
};

const Container = styled.div`
  flex: 1 0;

  @media only screen and (min-width: 575px) {
    flex: 0 0;
  }
`;

const _ListItem = styled(ListItem)`
  border-top: 1px solid ${props => props.theme.colors.menuBorderGray};
`;

const HeadContainer = styled(Header)`
  display: flex;
  color: ${props => props.theme.colors.white};
  background: transparent;
  padding: 24px;

  .circle {
    display: none;
  }

  @media only screen and (min-width: 575px) {
    color: ${props => props.theme.colors.textDark};
    box-shadow: none;
    background: linear-gradient(180deg, #FAFAFA 0%, #EFEFEF 100%);
    border: 1px solid #efefef;
    padding: 0;
    align-self: center;
    width: 300px;

    .fleet {
      font-size: 8px;
    }

    &:after {
      line-height: 45px;
      right: 24px;
    }

    ${({ isOpen }: HeadContainerProps) => isOpen && `
      &:after {
        line-height: 55px;
      }
    `}
  }
`;

const IconContainer = styled.div`
  display: none;

  @media only screen and (min-width: 575px) {
    display: flex;
    flex: 0 0 24px;
    width: 24px;
    padding: 14px 16px;
  }
`;

const NameContainer = styled.div`
  font-size: 16px;

  @media only screen and (min-width: 575px) {
    font-size: 14px;
  }
`;

const FleetContainer = styled.div.attrs({ className: 'fleet' })`
  font-size: 10px;

  @media only screen and (min-width: 575px) {
    color: ${props => props.theme.colors.textGray};
  }
`;

// const Icon = styled(FontAwesomeIcon).attrs({ icon: faShip })`
//   color: ${props => props.theme.colors.brandYellow};
// `;

const _Icon = styled(Icon).attrs({ icon: 'Ship' })`
  > path {
    fill: ${props => props.theme.colors.brandYellow};
  }
`;

const Circle = styled(FontAwesomeIcon).attrs({ icon: faCircle })`
  width: 16px;
`;


const LabelContainer = styled.div`
  flex: 1 0;
  background: transparent;
  align-self: center;
`;

const ItemLabelContainer = styled.div`
  display: flex;
`;

const InnerLeftContainer = styled.div`
  flex: 1 0;
`;

const InnerRightContainer = styled.div.attrs({ className: 'circle' })`
  flex: 0 0;
  align-self: center;
`;

const SC = {
  Container,
  HeadContainer,
  IconContainer,
  LabelContainer,
  Icon: _Icon,
  NameContainer,
  FleetContainer,
  Circle,
  ItemLabelContainer,
  InnerLeftContainer,
  InnerRightContainer,
  ListItem: _ListItem
};

export default SC;
