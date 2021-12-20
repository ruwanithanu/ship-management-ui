import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/pro-light-svg-icons';

const Container = styled.li`
  padding: 20px 18px;
  border-bottom: 1px solid ${props => props.theme.colors.borderGray};
  display: flex;
  line-height: 15px;
`;

const IconContainer = styled.div`
  flex: 0 0;
  align-self: flex-end;
  line-height: 24px;
`;

const DetailsContainer = styled.div`
  flex: 1 0;
  padding: 0 18px;
  color: ${props => props.theme.colors.textList};
`;

const DocName = styled.div`
  font-size: 13px;

  > span {
    background: ${props => props.theme.colors.highlight};
  }
`;

const DocDate = styled.div`
  font-size: 10px;
`;

const ActionsContainer = styled.div`
  flex: 0 0;
  align-self: center;
`;

export const DownLoadIcon = styled(FontAwesomeIcon).attrs({ icon: faDownload })`
  width: 16px;
  color: ${props => props.theme.colors.textGray};
  cursor: pointer;
`;

const SC = {
  Container,
  IconContainer,
  DetailsContainer,
  ActionsContainer,
  DocName,
  DocDate,
  DownLoadIcon
};

export default SC;
