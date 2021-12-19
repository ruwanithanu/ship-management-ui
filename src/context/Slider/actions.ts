import { Dispatch } from 'react';

import {
  Action,
  Actions
} from './types';

export const openSlider = (dispatch: Dispatch<Action>) => () => {
  dispatch({ type: Actions.SHOW });
};

export const closeSlider = (dispatch: Dispatch<Action>) => () => {
  dispatch({ type: Actions.HIDE });
};

export const setCurrent = (dispatch: Dispatch<Action>) => (index: number) => {
  dispatch({ type: Actions.SET_CURRENT, payload: index });
};
