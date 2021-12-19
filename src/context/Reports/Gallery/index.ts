import { useContext } from 'react';
import createDataContext from '../../createDataContext';
import reducer from '../../common/reducer';
import { State } from '../../common/types';
import { setParentId, navigate } from '../../common/actions';
import { fetchData } from './actions';

const initialState: State = {
  data: null,
  parentId: undefined,
  page: 1
};

export const {Context, Provider} = createDataContext(
  reducer,
  {
    fetchData,
    setParentId,
    navigate
  },
  initialState
);

export const useGallery = () => {
  const {
    state,
    fetchData,
    setParentId,
    navigate
  } = useContext<any>(Context);

  return {
    state,
    fetchData,
    setParentId,
    navigate
  };
};
