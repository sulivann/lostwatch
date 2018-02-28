import { combineReducers } from 'redux';

import sessionReducer from './sessionReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  modal: modalReducer,
});

export default rootReducer;
