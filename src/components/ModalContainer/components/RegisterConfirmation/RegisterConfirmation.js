import React from 'react';
import PropTypes from 'prop-types';

import BlockHeaderModal from '../BlockHeaderModal';
import Button from '../../../Button';

import './RegisterConfirmation.scss';

const RegisterConfirmation = ({ openModal }) => (
  <div className="registerConfirmation">
    <BlockHeaderModal
      title="Merci pour votre inscription. Confirmez votre compte par mail."
      description="Nous vous avons envoyé un e-mail de confirmation par email, veuillez activer le lien reçu."/>
    <Button
      text="Obtenir mon certificat"
      onClick={() => openModal('payment-certificate')}
      isAlternate/>
  </div>
);

RegisterConfirmation.propTypes = {
  openModal: PropTypes.func.isRequired,
}

export default RegisterConfirmation;
