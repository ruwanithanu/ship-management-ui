import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { TechPaperFile, TechPaperFiles } from '@/types';
import { useSearch } from '@context/Search';
import Card from './Card';
import { Spinner, Pagination } from '@angloeastern/react-components';
import { getPageSlice } from '@/utils';
import SC from './style';

interface Props {
  page: number;
  files: TechPaperFiles;
  navigate: Function;
};

interface State {
  total: number;
  dataset: TechPaperFiles;
};

const { REACT_APP_PER_PAGE } = process.env;
const pageSize = parseInt(REACT_APP_PER_PAGE as string, 10);

const TechPapers = ({ page = 1, files, navigate }: Props) => {
  const { state: { term } } = useSearch();
  const [state, setState] = useState<State>({
    total: 0,
    dataset: []
  });

  const { total, dataset } = state;

  const getCards = () => {
    return dataset.map(file => <Card key={file.id} file={file} />);
  };

  useEffect(() => {
    if (files) {
      const query = term.trim();
      let _dataset = files;
      if (query !== '') {
        _dataset = files.filter((file: TechPaperFile) => {
          return file.name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
        }).map((file: TechPaperFile) => {
          const pattern = new RegExp(`(${query})`, 'i');
          const fileCopy = {...file};
          fileCopy.name = file.name.replace(pattern, '<span>$1</span>');
          return fileCopy;
        });
      }

      const { sliceStart, sliceEnd } = getPageSlice(_dataset, page, pageSize);
      setState({
        total: _dataset.length,
        dataset: _dataset.slice(sliceStart, sliceEnd)
      });
    }
  }, [files, page, term]);

  return <>
    {files ? <>
      <SC.Container>
        <SC.Cards>
          {getCards()}
        </SC.Cards>
      </SC.Container>
      <SC.Pagination>
        <Pagination
          totalCount={total}
          currentPage={page}
          navigate={navigate}
          pageSize={pageSize}
        />
      </SC.Pagination>
    </>: <Spinner />}
  </>;
};

TechPapers.propTypes = {
  files: PropTypes.array,
  page: PropTypes.number,
  navigate: PropTypes.func
};

export default TechPapers;
