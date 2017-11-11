// Importing all the actions
import * as types from '../actions/actionTypes';

// Reducer for course
export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_COURSE: return [...state, Object.assign({}, action.payload)];
    default: return state;
  }
}
