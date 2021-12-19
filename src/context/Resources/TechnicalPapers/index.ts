import { useContext } from 'react';
import createDataContext from '../../createDataContext';
import reducer from '../reducer';
import { State } from '../types';
import { navigate } from '../actions';
import { fetchFiles } from './actions';

const initialState: State = {
  files: null,
  page: 1
};

export const {Context, Provider} = createDataContext(
  reducer,
  {
    fetchFiles,
    navigate
  },
  initialState
);

export const useTechnicalPapers = () => {
  const {
    state,
    fetchFiles,
    navigate
  } = useContext<any>(Context);

  return {
    state,
    fetchFiles,
    navigate
  };
};
