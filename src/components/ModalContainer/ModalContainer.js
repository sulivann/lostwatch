import React from 'react';
import PropTypes from 'prop-types';

import BuyCertificate from './components/BuyCertificate';
import CheckingCertificate from './components/CheckingCertificate';
import RegisterOrLogin from './components/RegisterOrLogin';
import BuyingRegister from './components/BuyingRegister';
import RegisterConfirmation from './components/RegisterConfirmation';
import AddNewSerie from './components/AddNewSerie';
import CheckingSerie from './components/CheckingSerie';
import SerieConfirmation from './components/SerieConfirmation';
import PaymentCertificate from './components/PaymentCertificate';
import PaymentConfirmed from './components/PaymentConfirmed';
import BuyingLogin from './components/BuyingLogin';
import Register from './components/Register';
import Login from './components/Login';

import './ModalContainer.scss';

const ModalContainer = ({ modalContent, openModal, closeModal }) => {
  let content = '';

  switch (modalContent) {
    case 'buy-certificate':
      content = <BuyCertificate openModal={openModal}/>;
      break;
    case 'checking-certificate':
      content = <CheckingCertificate openModal={openModal}/>;
      break;
    case 'register-or-login':
      content = <RegisterOrLogin openModal={openModal}/>
      break;
    case 'buying-register':
      content = <BuyingRegister openModal={openModal}/>
      break;
    case 'register-confirmation':
      content = <RegisterConfirmation openModal={openModal}/>
      break;
    case 'add-new-serie':
      content = <AddNewSerie openModal={openModal}/>
      break;
    case 'checking-serie':
      content = <CheckingSerie openModal={openModal}/>
      break;
    case 'serie-confirmation':
      content = <SerieConfirmation openModal={openModal} closeModal={closeModal}/>
      break;
    case 'payment-certificate':
      content = <PaymentCertificate openModal={openModal}/>
      break;
    case 'payment-confirmed':
      content = <PaymentConfirmed openModal={openModal}/>
      break;
    case 'buying-login':
      content = <BuyingLogin openModal={openModal}/>
      break;
    case 'register':
      content = <Register openModal={openModal}/>
      break;
    case 'login':
      content = <Login closeModal={closeModal}/>
      break;
    default:
      content = '';
      break;
    }

    return (
      <div className="modalContainer">
        {content}
      </div>
    )
};

ModalContainer.propTypes = {
  modalContent: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
}

export default ModalContainer;
