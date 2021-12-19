import {
  State,
  Action,
  Actions
} from './types';

const sliderReducer = (state: State, action: Action): State => {

  switch (action.type) {
    case Actions.SHOW:
      return {
        ...state,
        show: true
      };
    case Actions.HIDE:
      return {
        ...state,
        show: false
      };
    case Actions.SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    default: return state;
  }
};

export default sliderReducer;
