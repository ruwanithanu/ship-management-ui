export enum Actions {
  SET_TERM = 'set-term'
};

export interface State {
  term: string;
};

export type Action =
| { type: Actions.SET_TERM, payload: string };
