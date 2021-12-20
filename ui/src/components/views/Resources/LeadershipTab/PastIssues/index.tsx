import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { Pagination, Spinner } from '@angloeastern/react-components';
import { getPageSlice } from '@/utils';
import { parseDate } from '@utils/dateUtils';
import SC from './style';

interface Props {
  files: Array<any>;
  page: number;
  navigate: Function;
  onClickIssue: Function;
};

interface State {
  total: number;
  dataset: Array<any>;
};

const { REACT_APP_PER_PAGE } = process.env;
const pageSize = parseInt(REACT_APP_PER_PAGE as string, 10);

const PastIssues = ({ files, page, navigate, onClickIssue }: Props) => {
  const { t, ready } = useTranslation();
  const [state, setState] = useState<State>({
    total: 0,
    dataset: []
  });

  const { total, dataset } = state;

  const getCards = () => {
    return dataset.map((file: any) => {
      const { month, year } = parseDate(t, file.issueDate);
      const handleClick = () => {
        onClickIssue(file.issueNumber);
      };

      return <SC.Card key={file.id} onClick={handleClick}>
        <SC.ImgBox>
          <SC.Img src={file.downloadUri} alt={file.title} />
        </SC.ImgBox>
        <SC.Title>{file.title}</SC.Title>
        <SC.IssueDate>
          {t('text.issue', {
            number: file.issueNumber,
            month,
            year
          })}
        </SC.IssueDate>
      </SC.Card>;
    });
  };

  useEffect(() => {
    if (files) {
      const { sliceStart, sliceEnd } = getPageSlice(files, page, pageSize);
      setState({
        total: files.length,
        dataset: files.slice(sliceStart, sliceEnd)
      });
    }
  }, [files, page]);

  if (!ready) return <Spinner />;

  return <SC.PastIssues>
    <SC.Header>{t('text.pastIssues')}</SC.Header>
    <SC.Cards>
      {getCards()}
    </SC.Cards>
    <Pagination
      totalCount={total}
      currentPage={page}
      navigate={navigate}
      pageSize={pageSize}
    />
  </SC.PastIssues>
};

PastIssues.propTypes = {
  files: PropTypes.array,
  page: PropTypes.number,
  navigate: PropTypes.func,
  onClickIssue: PropTypes.func
};

export default PastIssues;
