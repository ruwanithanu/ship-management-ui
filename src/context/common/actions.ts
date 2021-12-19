import { Dispatch } from 'react';

import {
  Action,
  Actions
} from './types';

export const setParentId = (dispatch: Dispatch<Action>) => (parentId: string) => {
  dispatch({ type: Actions.SET_PARENT_ID, payload: parentId });
};

export const navigate = (dispatch: Dispatch<Action>) => (page: number): void => {
  dispatch({ type: Actions.NAVIGATE, payload: page });
};
