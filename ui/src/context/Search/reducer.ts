import {
  State,
  Action,
  Actions
} from './types';

const searchReducer = (state: State, action: Action): State => {

  switch (action.type) {
    case Actions.SET_TERM:
      return {
        ...state,
        term: action.payload
      };
    default: return state;
  }
};

export default searchReducer;
