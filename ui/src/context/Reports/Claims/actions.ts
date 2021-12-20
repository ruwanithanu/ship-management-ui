import { Dispatch } from 'react';

import { SharePointfiles } from '@/types';
import { fetchReportsClaims } from '@/api';

import {
  Action,
  Actions
} from '../../common/types';

export const fetchData = (dispatch: Dispatch<Action>) => async () => {
  const data: SharePointfiles = await fetchReportsClaims();
  dispatch({ type: Actions.FETCH_DATA, payload: data });
};
