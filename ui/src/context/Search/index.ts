import { useContext } from 'react';
import createDataContext from '../createDataContext';
import searchReducer from './reducer';
import { State } from './types';
import { setTerm } from './actions';

const initialState: State = {
  term: ''
};

export const {Context, Provider} = createDataContext(
  searchReducer,
  {
    setTerm
  },
  initialState
);

export const useSearch = () => {
  const {
    state,
    setTerm
  } = useContext<any>(Context);

  return {
    state,
    setTerm
  };
};
