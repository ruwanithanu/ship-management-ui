import { Dispatch } from 'react';

import { TechPaperFiles } from '@/types';
import { fetchTechnicalPapers } from '@/api';

import {
  Action,
  Actions
} from '../types';

export const fetchFiles = (dispatch: Dispatch<Action>) => async () => {
  const data: TechPaperFiles = await fetchTechnicalPapers();
  dispatch({ type: Actions.FETCH_FILES, payload: data });
};
