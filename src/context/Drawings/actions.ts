import { Dispatch } from 'react';

import { SharePointfiles } from '@/types';
import { fetchDrawings } from '@/api';

import {
  Action,
  Actions
} from '../common/types';

export const fetchData = (dispatch: Dispatch<Action>) => async () => {
  const data: SharePointfiles = await fetchDrawings();
  dispatch({ type: Actions.FETCH_DATA, payload: data });
};

