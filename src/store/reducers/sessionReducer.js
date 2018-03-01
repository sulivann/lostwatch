import { createSelector } from 'reselect';
import * as sessionActions from '../actions/sessionActions';

const initialState = {
  user: {},
  isLoggedIn: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case sessionActions.SESSION_AUTHENTIFICATION:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
      };
    default:
      return state;
  }
}

export const getSessionReducer = state => state.session;

export const getSessionIsLoggedIn = createSelector(
  getSessionReducer,
  session => session.isLoggedIn,
);

export const getSessionUserInfo = createSelector(
  getSessionReducer,
  session => session.user,
);
