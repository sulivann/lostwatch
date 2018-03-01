import React from 'react';
import PropTypes from 'prop-types';

import BlockHeaderModal from '../BlockHeaderModal';
import Button from '../../../Button';

import './RegisterOrLogin.scss';

const RegisterOrLogin = ({ openModal }) => (
  <div className="registerOrLogin">
    <BlockHeaderModal
      title="S’inscrire pour obtenir un certificat d'authenticité"
      description="Veuillez renseigner les informations suivantes afin de procéder à l’obtention de votre certificat"/>
    <div className="registerOrLogin__ctas">
      <Button
        text="S'inscrire"
        isAlternate
        onClick={() => openModal('buying-register')}/>
      <div className="registerOrLogin__separator"></div>
      <Button
        text="Se connecter"
        isAlternate
        onClick={() => openModal('buying-login')}/>
    </div>
    <div className="registerOrLogin__forgot">Mot de passe oublié ?</div>
  </div>
)

RegisterOrLogin.propTypes = {
  openModal: PropTypes.func.isRequired,
}

export default RegisterOrLogin;
