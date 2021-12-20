import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100%;
  background-color: ${props => props.theme.colors.backGround};
`;

interface SideBarProps {
  show?: boolean;
};

const Sidebar = styled.div`
  display: flex;
  position: fixed;
  flex: 0 0;
  width: 80%;
  z-index: 100;
  left: -100%;
  transition-property: left;
  transition-duration: 0.3s;
  transition-timing-function: linear;
  transition-delay: 0;

  ${({ show }: SideBarProps) => show && `
    left: 0;
  `}

  @media only screen and (min-width: 575px) {
    position: fixed;
    width: 56px;
    height: 100vh;
    left: 0;
    flex-basis: 56px;
  }
`;

const MainBox = styled.div`
  flex: 1 0;
  width: 100%;

  @media only screen and (min-width: 575px) {
    margin-left: 56px;
    min-height: 100vh;
    height: 100%;
  }
`;

const Main = styled.div`
  padding: 0;
  padding-bottom: 40px;
  position: relative;
  margin-top: 150px;

  @media only screen and (min-width: 575px) {
    padding: 16px 25px 40px 25px;
    min-height: 85%;
    margin-top: 56px;

  }
`;

const SC = {
  Container,
  Sidebar,
  MainBox,
  Main
};

export default SC;
