import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Gallery from '@components/Gallery';
import ListItem from './ListItem';
import TableRow from './TableRow';
import TableHead from './TableHead';
import {
  useMediaQuery,
  useBreakPoint,
  useTable,
  Spinner,
  Pagination,
  Table,
  List
} from '@angloeastern/react-components';
import { getPageSlice } from '@/utils';
import { useSearch } from '@context/Search';
import { SharePointfile, SharePointfiles, FileTypes } from '@/types/';
import { useSharePointFiles } from '@utils/hooks/useSharePointFiles';
import CenterMessage from '@components/CenterMessage';
import SC from './style';
import { t } from 'i18next';

interface Props {
  data: SharePointfiles;
  parentId?: string;
  setParentId: Function;
  navigate: Function;
  page: number;
};

interface State {
  total: number;
  dataset: SharePointfiles;
  parentFolder: SharePointfile | undefined;
};

const { REACT_APP_PER_PAGE } = process.env;
const pageSize = parseInt(REACT_APP_PER_PAGE as string, 10);

const SharePointDocList = ({ data, parentId, setParentId, page, navigate }: Props) => {
  const isAboveTablet = useMediaQuery('(min-width: 575px)');
  const { isAboveBreakPoint } = useBreakPoint(575);
  const { state: { term } } = useSearch();
  const { state: { sortBy, sortOrder } } = useTable();
  const { sortFiles, getParentFolder } = useSharePointFiles(data);
  const [state, setState] = useState<State>({
    total: 0,
    dataset: [],
    parentFolder: undefined
  });
  const { total, dataset, parentFolder } = state;

  const getFolderFiles = useCallback(() => {
    const theParentId = parentId === undefined ? '' : parentId;
    return data.filter((file: SharePointfile) => file.parentId === theParentId)
  }, [data, parentId]);


  useEffect(() => {
    if (data) {
      const query = term.trim();
      let _dataset = sortFiles(sortBy, sortOrder);
      if (query === '') {
        _dataset = getFolderFiles();
      } else {
        _dataset = data.filter((file: SharePointfile) => {
          return file.name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
        }).map((file: SharePointfile) => {
          const pattern = new RegExp(`(${query})`, 'i');
          const fileCopy = {...file};
          fileCopy.name = file.name.replace(pattern, '<span>$1</span>');
          return fileCopy;
        });
      }

      const { sliceStart, sliceEnd } = getPageSlice(_dataset, page, pageSize);
      setState({
        total: _dataset.length,
        dataset: _dataset.slice(sliceStart, sliceEnd),
        parentFolder: getParentFolder(parentId)
      });
    }
  }, [data, page, term, parentId, sortBy, sortOrder, sortFiles, getParentFolder, getFolderFiles]);

  useEffect(() => {
    navigate(1);
  }, [navigate, term]);

  return <>
    {data ? <>
      {(parentFolder && term === '') &&
        <SC.ParentFolder onClick={() => setParentId(parentFolder.parentId)}>
          {parentFolder.name}
        </SC.ParentFolder>
      }
      {data.length ? <>
        {(parentFolder === undefined || (parentFolder.type === FileTypes.FOLDER && !parentFolder.isGalleryFolder)) ? <>
          {isAboveTablet || isAboveBreakPoint?
            <Table
              rowComponent={TableRow}
              headComponent={TableHead}
              data={dataset}
              onFolderClick={setParentId}
            /> :
            <List
              data={dataset}
              itemComponent={ListItem}
              onFolderClick={setParentId}
            />
          }
        </> : <Gallery gallery={dataset} slides={getFolderFiles()} />}
        <SC.Pagination>
          <Pagination
            totalCount={total}
            currentPage={page}
            navigate={navigate}
            pageSize={pageSize}
          />
        </SC.Pagination>
      </> :
        <CenterMessage>{t('text.emptyFolder')}</CenterMessage>
      }
    </> :
    <Spinner />
    }
  </>;
};

SharePointDocList.propTypes = {
  data: PropTypes.array,
  parentId: PropTypes.string,
  setParentId: PropTypes.func,
  navigate: PropTypes.func,
  page: PropTypes.number,
};

export default SharePointDocList;
