import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  justify-content: space-between;
  flex-direction: row;

  @media only screen and (min-width: 768px) {
    padding: 30px 22px 18px;
  }
`;

const Card = styled.div`
  display: flex;
  position: relative;
  flex: 1 0 172px;
  margin-top: 8px;
  width: 172px;
  max-width: 172px;
  height: 266px;
  max-height: 266px;
  cursor: pointer;
  overflow: hidden;
  padding: 0 2px;
  border-radius: 8px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5), 0px 7px 20px rgba(0, 0, 0, 0.07), inset 0px 0px 4px rgba(255, 255, 255, 0.25);

  &:hover {
    box-shadow: 5px 5px 5px ${props => props.theme.colors.sortIconGray};
  }

  @media only screen and (min-width: 768px) {
    flex: 0 0 208px;
    width: 208px;
    max-width: 208px;
    height: 294px;
    max-height: 294px;
    margin: 18px 16px;
    padding: 0;
  }
`;

const CardMain = styled.div`
  flex: 1 0;
  background: ${props => props.theme.colors.navyBlue};
`;

const CardGutter = styled.div`
  flex: 0 0 9px;
  width: 9px;
  mid-width: 9px;

  @media only screen and (min-width: 768px) {
    flex: 0 0 10px;
    width: 10px;
    mid-width: 10px;
  }
`;

const CardGutterLeft = styled(CardGutter)`
  background: linear-gradient(90deg, #76A6C9 0%, rgba(114, 165, 203, 0) 44.27%, #0A2B43 100%);
  border-radius: 8px 0 0 8px;
`;

const CardGutterRight = styled(CardGutter)`
  background: linear-gradient(90deg, #003963 38.02%, #00487D 100%);
  border-radius: 0 8px 8px 0;
`;

const CardHead = styled.h3`
  color: ${props => props.theme.colors.brandYellow};
  font-size: 13px;
  font-weight: 500;
  text-align: left;
  line-height: 20px;
  font-style: normal;
  padding: 22px 14px 4px;
  margin: 0;
`;

const CardTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: ${props => props.theme.colors.white};
  text-align: left;
  padding: 0 14px;
  overflow-wrap: anywhere;

  > span {
    background: ${props => props.theme.colors.highlight};
    color: ${props => props.theme.colors.navyBlue};
  }
`;

const CardBottom = styled.div`
  display: flex;
  position: absolute;
  bottom: 12px;
  color: ${props => props.theme.colors.white};
  padding: 0 14px 0 24px;
  left: 0;
  width: 136px;

  @media only screen and (min-width: 768px) {
    width: 170px;
  }
`;

const CardUpdatedOn = styled.div`
  font-size: 9px;
  line-height: 22px;
  flex: 1 0;
  text-align: left;
  align-self: end;

  @media only screen and (min-width: 768px) {
    font-size: 10px;
    line-height: 24px;
  }
`;

const Icon = styled.div`
  font-size: 24px;
  --fa-primary-color: ${props => props.theme.colors.pdfRed};
  --fa-secondary-color: ${props => props.theme.colors.white};
  --fa-secondary-opacity: 1;
  border-radius: 14px;
  flex: 0 0 24px;
  text-align: right;

  @media only screen and (min-width: 768px) {
    font-size: 32px;
    height: 34px;
    flex: 0 0 27px;
  }
`;

const Pagination = styled.div`
  width: 100%;
  text-align: right;
  border-top: 1px solid ${props => props.theme.colors.borderGray};
`;

const SC = {
  Container,
  Cards,
  Card,
  CardGutterLeft,
  CardGutterRight,
  CardMain,
  CardHead,
  CardTitle,
  CardBottom,
  CardUpdatedOn,
  Icon,
  Pagination
};

export default SC;
