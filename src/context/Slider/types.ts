export enum Actions {
  SHOW = 'show',
  HIDE = 'hide',
  SET_CURRENT = 'set-current'
};

export interface State {
  show: boolean;
  current: number;
};

export type Action =
| { type: Actions.SHOW }
| { type: Actions.HIDE }
| { type: Actions.SET_CURRENT, payload: number };
