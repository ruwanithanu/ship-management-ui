import { Vessel, Vessels } from '@/types';

export enum Actions {
  FETCH_VESSELS= 'fetch-vessels',
  SET_VESSEL= 'set-vessel'
};

export interface State {
  vessels: Vessels | null;
  vessel: Vessel | null;
};

export type Action =
| { type: Actions.FETCH_VESSELS, payload: Vessels }
| { type: Actions.SET_VESSEL, payload: Vessel | null };
