import {
  State,
  Action,
  Actions
} from './types';

const vesselReducer = (state: State, action: Action): State => {

  switch (action.type) {
    case Actions.FETCH_VESSELS:
      return {
        ...state,
        vessels: action.payload
      };
    case Actions.SET_VESSEL:
      return {
        ...state,
        vessel: action.payload
      };
    default: return state;
  }
};

export default vesselReducer;
