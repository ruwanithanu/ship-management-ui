import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const Thumbnails = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  justify-content: space-between;
  flex-direction: row;

  @media only screen and (min-width: 768px) {
    padding: 0 18px 18px;
  }
`;

const Thumbnail = styled.div`
  flex: 1 0 178px;
  margin-top: 8px;
  width: 178px;
  max-width: 178px;
  height: 100px;
  max-height: 100px;
  cursor: pointer;
  overflow: hidden;
  padding: 0 2px;

  &:hover {
    box-shadow: 5px 5px 5px ${props => props.theme.colors.sortIconGray};

    img {
      transform: scale(1.5);
    }
  }

  @media only screen and (min-width: 768px) {
    flex: 0 0 320px;
    width: 294px;
    max-width: 294px;
    height: 176px;
    max-height: 176px;
    margin-top: 18px;
    padding: 0;
  }
`;

const Image = styled.img`
  height: 100px;
  width: 100%;
  transition: transform .2s;

  @media only screen and (min-width: 768px) {
    width: 294px;
    height: 176px;
  }
`;

const SC = {
  Container,
  Thumbnails,
  Thumbnail,
  Image
};

export default SC;
