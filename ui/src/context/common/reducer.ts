import {
  State,
  Action,
  Actions
} from './types';

const documentReducer = (state: State, action: Action): State => {

  switch (action.type) {
    case Actions.FETCH_DATA:
      return {
        ...state,
        data: action.payload
      };
    case Actions.SET_PARENT_ID:
      return {
        ...state,
        parentId: action.payload
      };
    case Actions.NAVIGATE:
      return {
        ...state,
        page: action.payload
      };
    default: return state;
  }
};

export default documentReducer;
