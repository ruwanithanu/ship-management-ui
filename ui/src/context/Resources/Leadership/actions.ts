import { Dispatch } from 'react';

import { fetchLeadership } from '@/api';

import {
  Action,
  Actions
} from '../types';

export const fetchFiles = (dispatch: Dispatch<Action>) => async () => {
  const data: any = await fetchLeadership();
  dispatch({ type: Actions.FETCH_FILES, payload: data });
};
