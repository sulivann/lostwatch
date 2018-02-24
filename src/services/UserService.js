import api from '../helpers/ApiHelper';

class UserService {
  static getUserWithTwitchAuthCode(authCode) {
    return new Promise(resolve => {
      resolve(api.post('auth', { code: authCode }));
    });
  }

  static getUserWithToken(token) {
    return new Promise(resolve => {
      resolve(api.get(
        'profile',
        {'headers': { Authorization: token }},
      ));
    });
  }
}

export default UserService;
