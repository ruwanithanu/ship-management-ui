import { Dispatch } from 'react';

import { SharePointfiles, Vessel } from '@/types';
import { fetchFinancialVesselReports } from '@/api';

import {
  Action,
  Actions
} from '../../common/types';

export const fetchData = (dispatch: Dispatch<Action>) => async (vessel: Vessel) => {
  const data: SharePointfiles = await fetchFinancialVesselReports(vessel);
  dispatch({ type: Actions.FETCH_DATA, payload: data });
};
