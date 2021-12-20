import { Dispatch } from 'react';

import { SharePointfiles } from '@/types';
import { fetchReportsClaims } from '@/api';

import {
  Action,
  Actions
} from '../../common/types';

export const fetchData = (dispatch: Dispatch<Action>) => async (aeCode: string) => {
  const data: SharePointfiles = await fetchReportsClaims(aeCode);
  dispatch({ type: Actions.FETCH_DATA, payload: data });
};
