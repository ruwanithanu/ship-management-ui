import styled from 'styled-components';

interface BackgroundProps {
  show: boolean;
  topGutter?: number;
}

const Background = styled.div`
  position: fixed;
  display: none;
  top: 0;
  right: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.6);
  width: 40%;

  ${({ show }: BackgroundProps) => show && `
    display: flex;
  `}

  @media only screen and (min-width: 575px) {
    ${({ topGutter }: BackgroundProps) => topGutter && `
      top: ${topGutter}px;
    `}
  }
`;

const Container = styled.div`
  position: relative;
  color: ${props => props.theme.colors.white};
  width: 100%;

  @media only screen and (min-width: 575px) {
    height: 100vh;
    margin: 20px;
    margin-bottom: 0;
  }

  @media only screen and (max-width: 575px) {
    canvas {
      height: auto !important;
      width: 100% !important;
    }
  }
`;

const CanvasContainer = styled.div`
  overflow: scroll;
  height: calc(100vh + 60px);

  @media only screen and (min-width: 575px) {
    height: 88%;
  }

  iframe {
    width: 100%;
    height: 100%;
  }
`;

const Top = styled.div`
  display: flex;
  align-content: center;
  padding: 14px;

  @media only screen and (min-width: 575px) {
    padding: 0 0 14px;
  }
`;

const Filename = styled.h3`
  flex: 1 0 40%;
  margin: 0;
  align-self: center;

  @media only screen and (min-width: 575px) {
    flex: 1 0 65%;
  }
`;

const Icon = styled.div`
  display: inline-block;
  width: 22px;
  height: 30px;
  line-height: 30px;
  margin-right: 10px;

  > svg {
    height: 100%;
    vertical-align: middle;
    margin-right: 10px;
    --fa-secondary-color: ${props => props.theme.colors.white};
    --fa-primary-color: ${props => props.theme.colors.pdfRed};
    --fa-secondary-opacity: 1;
    border-radius: 14px;
  }
`;

const Controls = styled.div`
  flex: 0 0;
  align-self: center;
  display: flex;
`;

const Nav = styled.div`
  flex: 1 0;
  align-self: center;
  display: flex;
  margin-right: 15px;
  color: ${props => props.theme.colors.white};

  @media only screen and (min-width: 575px) {
    margin-right: 20px;
  }
`;

const PageData = styled.div`
  flex: 1 0;
  align-self: center;
  font-size: 14px;
  text-align: center;

  @media only screen and (min-width: 575px) {
    font-size: 16px;
  }
`;

const NavIcon = styled.div`
  cursor: pointer;
  width: 12px;
  align-self: center;

  @media only screen and (min-width: 575px) {
    &:hover {
      color: ${props => props.theme.colors.brandYellow};
    }
  }
`;

const ControlIcon = styled.div`
  cursor: pointer;
  width: 18px;
  align-self: center;
  margin-left: 10px;

  a {
    color: ${props => props.theme.colors.white};
  }

  svg {
    height: auto;
  }

  @media only screen and (min-width: 575px) {
    &:hover {
      color: ${props => props.theme.colors.brandYellow};

      a {
        color: ${props => props.theme.colors.brandYellow};
      }
    }
  }
`;

const Pagination = styled.nav`
  ul {
    list-style: none;

    > li {
      display: inline-block;
    }
  }
`;

const Canvas = styled.canvas`
  @media only screen and (max-width: 575px) {
    width: 100% !important;
    height: auto !important;
  }
`;

const SC = {
  Background,
  Container,
  CanvasContainer,
  Pagination,
  ControlIcon,
  Canvas,
  Top,
  Filename,
  Icon,
  Controls,
  Nav,
  NavIcon,
  PageData
};

export default SC;
