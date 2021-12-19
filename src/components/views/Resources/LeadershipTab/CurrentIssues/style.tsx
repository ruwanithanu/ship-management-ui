import styled from 'styled-components';

const CurrentIssues = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 300px);
  max-height: 400px;

  @media only screen and (min-width: 575px) {
    max-height: unset;
  }
`;

const MainIssue = styled.div`
  flex: 1 0 100%;
  position: relative;
  height: 60%;
  cursor: pointer;

  @media only screen and (min-width: 575px) {
    flex: 0 0 70%;
    height: 100%;
    max-width: 70%;
  }
`;

const Tiles = styled.div`
  flex: 1 0 100%;
  display: flex;
  flex-wrap: wrap;
  height: 40%;
  cursor: pointer;

  @media only screen and (min-width: 575px) {
    flex: 0 0 30%;
    height: 100%;
  }
`;

const Tile = styled.div`
  flex: 0 0 50%;
  position: relative;

  @media only screen and (min-width: 575px) {
    flex: 0 0 100%;
  }
`;

const ImageBox = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
`;

const Img = styled.img`
  min-height: 100%;
  min-width: 100%;
  width: auto;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
`;

const DetailsBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  color: ${props => props.theme.colors.white};
  padding: 5px;
  font-style: normal;
  font-weight: bold;

  @media only screen and (min-width: 575px) {
    padding: 48px 36px;
  }
`;

const Category = styled.h5`
  margin: 0;
  font-size: 14px;
  line-height: 24px;

  @media only screen and (min-width: 575px) {
    font-size: 16px;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  line-height: 24px;

  @media only screen and (min-width: 575px) {
    font-size: 34px;
    line-height: 40px;
  }
`;

const SC = {
  CurrentIssues,
  MainIssue,
  Tiles,
  Tile,
  ImageBox,
  Img,
  DetailsBox,
  Category,
  Title
};

export default SC;
