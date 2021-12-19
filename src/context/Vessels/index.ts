import { useContext } from 'react';
import createDataContext from '../createDataContext';
import vesselReducer from './reducer';
import { State } from './types';
import { fetchVessels, setVessel } from './actions';

const initialState: State = {
  vessels: null,
  vessel: null
};

export const {Context, Provider} = createDataContext(
  vesselReducer,
  {
    fetchVessels,
    setVessel
  },
  initialState
);

export const useVessels = () => {
  const {
    state,
    fetchVessels,
    setVessel
  } = useContext<any>(Context);

  return {
    state,
    fetchVessels,
    setVessel
  };
};
