import {
  State,
  Action,
  Actions
} from './types';

const reducer = (state: State, action: Action): State => {

  switch (action.type) {
    case Actions.FETCH_FILES:
      return {
        ...state,
        files: action.payload
      };
    case Actions.NAVIGATE:
      return {
        ...state,
        page: action.payload
      };
    default: return state;
  }
};

export default reducer;
