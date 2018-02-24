import UserService from '../../services/UserService';

export const SESSION_AUTHENTIFICATION = 'SESSION_AUTHENTIFICATION';

export function sessionAuthentification(userData) {
  return {
    type: SESSION_AUTHENTIFICATION,
    user: userData
  };
}

export function retrieveUserWithToken(token) {
  return dispatch => {
    UserService.getUserWithToken(token).then(response => {
      // TODO : Can be better
      console.log(response);
      if(!response.data.error) {
        dispatch(sessionAuthentification(response.data.data));
      }
    });
  };
}

export function retrieveUserWithAuthCode(authCode) {
  return dispatch => {
    UserService.getUserWithTwitchAuthCode(authCode).then(response => {
      // TODO : Can be better
      console.log(response);
      if(!response.data.error) {
        dispatch(sessionAuthentification(response.data.data));
        localStorage.setItem('auth', response.data.data.token);
      }
    });
  };
}
