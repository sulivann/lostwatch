import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Lostwatch from '../Lostwatch';

import FranceFlagSrc from '../../assets/imgs/france-flag.jpg';

import './StickyHeader.scss';

const StickyHeader =  ({ openModal }) => {
  const logged = localStorage.getItem('email');
  return (
    <div className="stickyHeader">
      <div className="stickyHeader__container">
        <div className="stickyHeader__logo">
          <Link to='/'>
            <Lostwatch />
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav__mainPages">
            <Link to='/'>
              <li>Accueil</li>
            </Link>
            <Link to='/about'>
              <li>À propos</li>
            </Link>
            <li>Contact</li>
          </ul>
          <span className="nav__separator"></span>
            {logged ?
              <ul className="nav__mainPages">
                <Link to='/account'>
                  <li>Mon compte</li>
                </Link>
              </ul>
              :
              <ul className="nav__mainPages">
                <li onClick={() => openModal('register')}>{"S'inscrire"}</li>
                <li onClick={() => openModal('login')}>Se connecter</li>
              </ul>
            }
          <div className="nav__languages">
            <img src={FranceFlagSrc} className="nav__language"/>
            <span className="nav__arrowDown"></span>
          </div>
        </nav>
      </div>
    </div>
  )
}

StickyHeader.propTypes = {
  openModal: PropTypes.func.isRequired,
}

export default StickyHeader;

