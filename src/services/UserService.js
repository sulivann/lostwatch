import api from '../helpers/ApiHelper';

class UserService {
  static signUp(data) {
    return new Promise(resolve => {
      resolve(api.post('auth/signup', data));
    });
  }

  static login(data) {
    return new Promise(resolve => {
      resolve(api.post('auth/login', data));
    });
  }
}

export default UserService;
