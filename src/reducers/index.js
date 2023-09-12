import { combineReducers } from 'redux';
import formReducer from './FormSlice';

const rootReducer = combineReducers({
  form: formReducer,
  // Add more reducers here if needed
});

export default rootReducer;
