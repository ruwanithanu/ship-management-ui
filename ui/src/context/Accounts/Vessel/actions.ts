import { Dispatch } from 'react';

import { SharePointfiles } from '@/types';
import { fetchFinancialVesselReports } from '@/api';

import {
  Action,
  Actions
} from '../../common/types';

export const fetchData = (dispatch: Dispatch<Action>) => async () => {
  const data: SharePointfiles = await fetchFinancialVesselReports();
  dispatch({ type: Actions.FETCH_DATA, payload: data });
};
