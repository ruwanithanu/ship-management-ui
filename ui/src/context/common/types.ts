import { SharePointfiles } from '@/types';

export enum Actions {
  FETCH_DATA = 'fetch-data',
  SET_PARENT_ID = 'set-parent-id',
  NAVIGATE = 'navigate'
};

export interface State {
  data: SharePointfiles | null;
  parentId: string | undefined;
  page: number;
}

export type Action =
| { type: Actions.FETCH_DATA, payload: SharePointfiles }
| { type: Actions.SET_PARENT_ID, payload: string }
| { type: Actions.NAVIGATE, payload: number };
