import styled from 'styled-components';

const ParentFolder = styled.div`
  cursor: pointer;
  padding: 24px 15px;
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.colors.textList};
  border-bottom: 1px solid rgba(120, 120, 120, 0.5);

  &:hover {
    color: ${props => props.theme.colors.cyan};
  }

  &:before {
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    font-family: "Font Awesome 5 Pro";
    font-weight: 900;
    content: "\\f060";
    font-size: 14px;
    margin-right: 5px;
  }
`;

const Pagination = styled.div`
  width: 100%;
  text-align: right;
  border-top: 1px solid ${props => props.theme.colors.borderGray};
`;

const SC = {
  ParentFolder,
  Pagination
};

export default SC;
