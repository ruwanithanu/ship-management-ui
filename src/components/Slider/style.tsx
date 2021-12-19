import styled from 'styled-components';

interface BackgroundProps {
  show: boolean;
}

const Background = styled.div`
  display: none;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 300;
  background: rgba(0, 0, 0, 0.8);
  color:  ${props => props.theme.colors.white};

  ${({ show }: BackgroundProps) => show && `
    display: flex;
  `}
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  align-self: center;
`;

const Chevron = styled.div`
  width: 30px;
  flex: 0 0  30px;
  color: ${props => props.theme.colors.white};
  align-self: center;

  > svg {
    width: 14px;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.brandYellow};
    }
  }

  @media only screen and (min-width: 575px) {
    width: 150px;
    flex: 0 0 150px;

    > svg {
      width: 36px;
    }
  }
`;

const Center = styled.div`
  width: 100%;
  flex: 1 0;
  margin: 14px 0;

  @media only screen and (min-width: 575px) {
    margin: 40px 0;
  }
`;

const Viewport = styled.div`
  width: 100%;
  min-height: 75%;
  flex: 1 0;
  background: transparent;
  margin: 14px 0;
  border: 2px solid #5DE4EC;
  overflow: hidden;
  position: relative;
  text-align: center;

  @media only screen and (min-width: 575px) {
    margin: 35px 0;
  }
`;

const Slides = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background: transparent;

  > img {
    width: 100%;
    height: auto;
    align-self: center;
  }

`;

const SlideTop = styled.div`
  display: flex;
`;

const SlideBottom = styled.div`
  align-self: center;
`;

const Filename = styled.div`
  flex: 1 0;
  text-align: left;
  align-self: center;
  font-size: 16px;
`;

const TopControls = styled.div`
  flex: 0 0 60px;
  display: flex;
  justify-content: space-between;
`;

const TopControl = styled.div`
  align-self: center;
  cursor: pointer;

  svg {
    width: 22px;
  }

  &:hover {
    color: ${props => props.theme.colors.brandYellow}
  }
`;

const SC = {
  Background,
  Container,
  Chevron,
  Center,
  SlideTop,
  SlideBottom,
  Filename,
  TopControls,
  TopControl,
  Viewport,
  Slides,
  Slide
};

export default SC;
