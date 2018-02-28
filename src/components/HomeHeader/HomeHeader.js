import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import Button from '../Button';

import './HomeHeader.scss';

const HomeHeader = ({ openModal }) => (
  <div className="homeHeader">
    <div className="homeHeader__container">
      <Logo
        color='gold'/>
      <h2 className="homeHeader__title">Soyez certains de l’origine de votre montre.</h2>
      <p className="homeHeader__content">Lostwatch vous permet de vérifier l’authenticité de votre montre en vous délivrant un certificat de conformité.</p>
      <div className="homeHeader__ctas">
        <Button
          text='Obtenir un certificat'
          onClick={() => openModal('buy-certificate')}/>
        <Button
          text='Signaler une perte ou un vol'
          onClick={() => openModal('add-new-serie')}/>
      </div>
    </div>
  </div>
);

HomeHeader.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default HomeHeader;

