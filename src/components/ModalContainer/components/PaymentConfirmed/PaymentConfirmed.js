import React, { Component } from 'react';

import CertificateService from '../../../../services/CertificateService';

import BlockHeaderModal from '../BlockHeaderModal';
import Button from '../../../Button';

import './PaymentConfirmed.scss';

class PaymentConfirmed extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.certificate = '';
  }

  async componentWillMount() {
    const certificate = await CertificateService.getCertificate('nguyen.sulivan@gmail.com');
    this.setState({
      certificate: certificate.data.data,
    })
  }

  render() {
    const serie = localStorage.getItem('serie');
    return (
      <div className="paymentCertificate">
        <BlockHeaderModal
          title="Merci pour votre paiement. Votre certificat est disponible immédiatement"/>
        <div className="paymentCertificate__serie">{serie}</div>
        <p className="paymentCertificate__description">Votre certificat vous est également envoyé sur l’adresse mail spécifiée, et est également disponible dans votre compte.</p>
        <div className="paymentCertificate__ctas">
          <a href={this.state.certificate} target="_blank">
            <Button
              text="Télécharger mon certificat"
              isAlternate/>
          </a>
          <Button
            text="Accéder à mon compte"
            isAlternate/>
        </div>
      </div>
    );
  }
};

export default PaymentConfirmed;
