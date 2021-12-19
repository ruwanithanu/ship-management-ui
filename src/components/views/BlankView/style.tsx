import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: calc(100vh - 120px);
  width: 100%;
  align-content: center;
  background: ${props => props.theme.colors.white};
`;

const Message = styled.div`
  margin: 0 auto;
  font-size: 22px;
  font-weight: 700;
  align-self: center;
  color: ${props => props.theme.colors.sideBarIconGray};
  max-width: 326px;
  text-align: center;
`;

const SC = {
  Container,
  Message
};

export default SC;
