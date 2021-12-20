import { Dispatch } from 'react';

import { Vessels, Vessel } from '@/types';
import { fetchVessels as fetchVesselsApi } from '@/api';

import {
  Action,
  Actions
} from './types';

export const fetchVessels = (dispatch: Dispatch<Action>) => async () => {
  const data: Vessels = await fetchVesselsApi();
  dispatch({ type: Actions.FETCH_VESSELS, payload: data });
};

export const setVessel = (dispatch: Dispatch<Action>) => (vessel: Vessel) => {
  dispatch({ type: Actions.SET_VESSEL, payload: vessel });
};
