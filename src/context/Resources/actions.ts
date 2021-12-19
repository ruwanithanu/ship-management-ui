import { Dispatch } from 'react';

import {
  Action,
  Actions
} from './types';

export const navigate = (dispatch: Dispatch<Action>) => (page: number): void => {
  dispatch({ type: Actions.NAVIGATE, payload: page });
};
