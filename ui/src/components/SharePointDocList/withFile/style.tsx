import styled from 'styled-components';

const Row = styled.tr`
`;

const Cell = styled.td`
  padding: 24px;
  border-top: 1px solid ${props => props.theme.colors.borderGray};
  font-size: 13px;
  font-weight: 400;
`;

const Icon = styled.div`
  width: 36px;
  margin: 0 auto;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  padding-right: 15px;
  cursor: pointer;
`;

const Name = styled.span`
  cursor: pointer;

  > span {
    background: ${props => props.theme.colors.highlight};
  }
`;

const SC = {
  Row,
  Cell,
  Icon,
  Name
};

export default SC;
