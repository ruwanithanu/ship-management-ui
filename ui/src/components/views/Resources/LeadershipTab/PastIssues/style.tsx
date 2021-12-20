import styled from 'styled-components';

const PastIssues = styled.div`
  background: white;
  padding: 24px 0;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 200px;
  justify-content: space-between;
  cursor: pointer;
`;

const Header = styled.h3`
  margin: 0;
  padding: 16px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;

  @media only screen and (min-width: 575px) {
    padding: 16px 0;
  }
`;

const Title = styled.h5`
  margin: 0;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  padding: 0 16px 5px;

  @media only screen and (min-width: 575px) {
    padding: 0;
  }
`;

const IssueDate = styled.div`
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  color: ${props => props.theme.colors.textGray};
  text-transform: uppercase;

  padding: 0 16px 0;

  @media only screen and (min-width: 575px) {
    padding: 0;
  }
`;

const Card = styled.div`
  flex: 1 0 100%;
  margin: 12px 0;

  @media only screen and (min-width: 575px) {
    flex: 0 1 calc(20% - 1em);
    padding-bottom: 40px;
    margin: 0;
  }
`;

const ImgBox = styled.div`
  overflow: hidden;
  margin-bottom: 12px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const SC = {
  PastIssues,
  Header,
  Cards,
  Card,
  ImgBox,
  Img,
  Title,
  IssueDate
};

export default SC;
