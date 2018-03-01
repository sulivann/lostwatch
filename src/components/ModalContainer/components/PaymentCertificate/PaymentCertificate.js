import React from 'react';
import PropTypes from 'prop-types';

import BlockHeaderModal from '../BlockHeaderModal';
import Button from '../../../Button';

import './PaymentCertificate.scss';

const PaymentCertificate = ({ openModal }) => {
  const serie = localStorage.getItem('serie');
  return (
    <div className="paymentCertificate">
      <BlockHeaderModal
        title="Vous avez demandé un certificat d’authenticité pour le numéro de serie "/>
      <div className="paymentCertificate__serie">{serie}</div>
      <p className="paymentCertificate__description">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
      <div className="paymentCertificate__ctas">
        <Button
          text="Procéder au paiement"
          onClick={() => openModal('payment-confirmed')}
          isAlternate/>
        <Button
          text="Payer avec paypal"
          onClick={() => openModal('payment-confirmed')}
          isAlternate/>
      </div>
    </div>
  )
};

PaymentCertificate.propTypes = {
  openModal: PropTypes.func.isRequired,
}

export default PaymentCertificate;
