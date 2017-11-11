// Function for combine all the reducers
import { combineReducers } from 'redux';

// The reducers
import courses from './courseReducers';

// Combining all reducers
const rootReducer = combineReducers({ courses });

// Exporting the const
export default rootReducer;
