import styled from 'styled-components';

const TopArea = styled.div`
  display: flex;
`;

const TitleArea = styled.div`
  display: none;

  @media only screen and (min-width: 575px) {
    display: block;
    flex: 1 0;
  }
`;

const SearchArea = styled.div`
  flex: 1 0;
  text-align: right;
  padding: 10px 20px 18px 20px;
  position: relative;

  &:before {
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    font-family: "Font Awesome 5 Pro";
    font-weight: 900;
    content: "\\f002";
    position: absolute;
    top: 20px;
    font-size: 22px;
    left: 30px;
    z-index: 2;
    color: ${props => props.theme.colors.placeholderGrayLight};
  }

  @media only screen and (min-width: 575px) {
    padding: 0;

    &:before {
      right: 265px;
      color: ${props => props.theme.colors.placeholderGrayDark};
    }
  }
`;

const Search = styled.input`
  border-radius: 8px;
  padding: 10px;
  padding-left: 40px;
  width: 100%;
  box-sizing: border-box;
  border: 0.5px solid ${props => props.theme.colors.placeholderGrayLight};
  font-size: 14px;
  line-height: 20px;

  &:focus {
    outline: none;
  }

  &::placeholder,
  &:-ms-input-placeholder,
  &::-ms-input-placeholder {
    color: ${props => props.theme.colors.placeholderGrayLight};
  }

  @media only screen and (min-width: 575px) {
    background: transparent;
    margin-top: 10px;
    border-radius: 20px;
    width: 300px;
    border: 0.5px solid ${props => props.theme.colors.textDark};

    &::placeholder,
    &:-ms-input-placeholder,
    &::-ms-input-placeholder {
      color: ${props => props.theme.colors.placeholderGrayDark};
    }
  }
`;


const Title = styled.h1`
  display: none;

  @media only screen and (min-width: 575px) {
    display: block;
    font-size: 22px;
    margin-bottom: 24px;
  }
`;

const BreadCrumbs = styled.div`
  display: none;

  @media only screen and (min-width: 575px) {
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 13px;
    font-weight: 500;
    color: ${props => props.theme.colors.cyan};
  }
`;

const Main = styled.div`
  padding: 0;
  padding-bottom: 40px;

  @media only screen and (min-width: 575px) {
    padding: 16px 25px 40px 25px;
  }
`;

const ListContainer = styled.div`
  background: ${props => props.theme.colors.white};
  height: 100vh;

  @media only screen and (min-width: 575px) {
    height: auto;
    min-height: 580px;
  }
`;

const SC = {
  Main,
  Title,
  TopArea,
  TitleArea,
  BreadCrumbs,
  SearchArea,
  Search,
  ListContainer
};

export default SC;
