import { Dispatch } from 'react';

import { TechPaperFiles } from '@/types';
import { fetchLookouts } from '@/api';

import {
  Action,
  Actions
} from '../types';

export const fetchFiles = (dispatch: Dispatch<Action>) => async () => {
  const data: TechPaperFiles = await fetchLookouts();
  dispatch({ type: Actions.FETCH_FILES, payload: data });
};
