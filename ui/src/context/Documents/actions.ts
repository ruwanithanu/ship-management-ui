import { Dispatch } from 'react';

import { SharePointfiles } from '@/types';
import { fetchDocuments } from '@/api';

import {
  Action,
  Actions
} from '../common/types';

export const fetchData = (dispatch: Dispatch<Action>) => async (aeCode: string) => {
  const data: SharePointfiles = await fetchDocuments(aeCode);
  dispatch({ type: Actions.FETCH_DATA, payload: data });
};
