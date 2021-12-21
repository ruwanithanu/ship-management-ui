import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFilter } from '@fortawesome/pro-light-svg-icons';

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.navBackGround};
  box-shadow: 0px 7px 20px ${props => props.theme.colors.shadowGray};
  position: fixed;
  height: 128px;
  width: 100%;
  z-index: 10;

  @media only screen and (min-width: 575px) {
    flex-direction: row-reverse;
    height: 56px;
    width: calc(100vw - 56px);
    left: 56px;
  }
`;

const TopSide = styled.div`
  display: flex;
  flex: 1 0;
  padding: 16px;
  background-color: ${props => props.theme.colors.navBackGround};
  line-height: 30px;
  justify-content: space-between;

  @media only screen and (min-width: 575px) {
    padding: 0 16px;
  }
`;

const Bars = styled.div`
  flex: 0 0;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  flex: 1 0;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  color: ${props => props.theme.colors.navyBlue};

  @media only screen and (min-width: 575px) {
    display: none;
  }
`;

const AvatarBox = styled.div`
  flex: 0 0;
  text-align: right;
  width: 30px;
  height: 30px;
  max-width: 30px;
  max-height: 30px;
  align-self: center;

  @media only screen and (min-width: 575px) {
    width: 36px;
    height: 36px;
    max-width: 36px;
    max-height: 36px;
  }
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  @media only screen and (min-width: 575px) {
    width: 36px;
    height: 36px;
  }
`;

const BottomSide = styled.div`
  flex: 1 0;
  background-color: ${props => props.theme.colors.navyBlue};
  color: ${props => props.theme.colors.white};
  padding: 0;

  ul {
    z-index: 50;
  }

  @media only screen and (min-width: 575px) {
    background-color: ${props => props.theme.colors.navBackGround};
    color: ${props => props.theme.colors.textDark};
    align-self: center;

    ul {
      width: 296px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Hamburger = styled(FontAwesomeIcon).attrs({ icon: faBars })`
  width: 24px !important;
  height: 24px;
  font-weight: 400;
  cursor: pointer;

  @media only screen and (min-width: 575px) {
    display: none;
  }
`;

const Filter = styled(FontAwesomeIcon).attrs({ icon: faFilter })`
  height: 20px;
  font-weight: 400;
  cursor: pointer;
`;

const FilterBox = styled.div`
  padding: 0 24px;
  align-self: center;
  flex: 0 0;
  margin-left: 24px;

  @media only screen and (min-width: 575px) {
    padding: 16px;
    margin-left: 0;
    background: ${props => props.theme.colors.white};
    vertical-align: middle;
  }
`;

const ControlArea = styled.div`
  display: flex;
`;

const SC = {
  Container,
  TopSide,
  BottomSide,
  Hamburger,
  Bars,
  Title,
  AvatarBox,
  Avatar,
  Filter,
  FilterBox,
  ControlArea
};

export default SC;
