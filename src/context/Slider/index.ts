import { useContext } from 'react';
import createDataContext from '../createDataContext';
import sliderReducer from './reducer';
import { State } from './types';
import {
  openSlider,
  closeSlider,
  setCurrent
} from './actions';

const initialState: State = {
  show: false,
  current: 0
};

export const {Context, Provider} = createDataContext(
  sliderReducer,
  {
    openSlider,
    closeSlider,
    setCurrent
  },
  initialState
);

export const useSlider = () => {
  const {
    state,
    openSlider,
    closeSlider,
    setCurrent
  } = useContext<any>(Context);

  return {
    state,
    openSlider,
    closeSlider,
    setCurrent
  };
};
