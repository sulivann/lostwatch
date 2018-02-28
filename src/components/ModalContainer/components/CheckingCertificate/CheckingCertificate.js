import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BlockHeaderModal from '../BlockHeaderModal';
import Loading from '../Loading';

import './CheckingCertificate.scss';

class CheckingCertificate extends Component {
  componentDidMount() {
    setTimeout(() => {
      if(!localStorage.getItem('email')) {
        this.props.openModal('register-or-login');
      } else {
        this.props.openModal('payment-certificate');
      }
    }, 5000);
  }

  render() {
    return (
      <div className="checkingCertificate">
        <BlockHeaderModal
          title='Nous procédons à une recherche dans nos fichiers'/>
        <Loading />
        <div className="checkingCertificate__label">Veuillez patienter...</div>
      </div>
    );
  }
}

CheckingCertificate.propTypes = {
  openModal: PropTypes.func.isRequired,
}

export default CheckingCertificate;
