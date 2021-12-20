import { Dispatch } from 'react';

import {
  Action,
  Actions
} from './types';

export const setTerm = (dispatch: Dispatch<Action>) => (term: string) => {
  dispatch({ type: Actions.SET_TERM, payload: term });
};
