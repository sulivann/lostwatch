import api from '../helpers/ApiHelper';

class CertificateService {
  static getCertificate(email) {
    return new Promise(resolve => {
      resolve(api.post('certificate', { email: 'nguyen.sulivan@gmail.com', isReal: true }));
    });
  }
}

export default CertificateService;
