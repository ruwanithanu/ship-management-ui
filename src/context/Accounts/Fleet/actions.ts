import { Dispatch } from 'react';

import { SharePointfiles } from '@/types';
import { fetchFinancialFleetReports } from '@/api';

import {
  Action,
  Actions
} from '../../common/types';

export const fetchData = (dispatch: Dispatch<Action>) => async () => {
  const data: SharePointfiles = await fetchFinancialFleetReports();
  dispatch({ type: Actions.FETCH_DATA, payload: data });
};
