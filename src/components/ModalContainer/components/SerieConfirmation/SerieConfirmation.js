import React from 'react';
import PropTypes from 'prop-types';

import BlockHeaderModal from '../BlockHeaderModal';
import Button from '../../../Button';

import './SerieConfirmation.scss';

const SerieConfirmation = ({ closeModal }) => (
  <div className="registerConfirmation">
    <BlockHeaderModal
      title="Merci de votre contribution"
      description="Vous serez notifié si toutefois nous établissons une concordance avec le numéro de série de votre compte."/>
    <Button
      text="Retourner à l'accueil"
      onClick={closeModal}
      isAlternate/>
  </div>
);

SerieConfirmation.propTypes = {
  closeModal: PropTypes.func.isRequired,
}

export default SerieConfirmation;
