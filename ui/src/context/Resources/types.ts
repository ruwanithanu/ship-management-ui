import { TechPaperFiles } from '@/types';

export enum Actions {
  FETCH_FILES = 'fetch-files',
  NAVIGATE = 'navigate'
};

export interface State {
  files: TechPaperFiles | null;
  page: number;
}

export type Action =
| { type: Actions.FETCH_FILES, payload: TechPaperFiles }
| { type: Actions.NAVIGATE, payload: number };
