import React from 'react';

import Lostwatch from '../Lostwatch';
import BlockContainer from '../BlockContainer';

import FacebookIconSrc from '../../assets/imgs/facebook.svg';
import InstagramIconSrc from '../../assets/imgs/instagram.svg';

import './Footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer__separator"></div>
    <footer className="footer__container">
      <BlockContainer>
        <div className="footer__innerContainer">
          <div className="footer__description">
            <Lostwatch />
            <p className="footer__text">
              {"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500"}
            </p>
          </div>
          <div className="footer__infos">
            <nav className="footer__sitemap">
              <h3 className="footer__title">Liens utiles</h3>
              <div className="footer__lists">
                <ul>
                  <li>À propos</li>
                  <li>Se connecter</li>
                  <li>{"S'inscrire"}</li>
                </ul>
                <ul>
                  <li>Obtenir un certificat</li>
                  <li>Déclarer une perte/vol</li>
                </ul>
              </div>
            </nav>
            <div className="footer__horizontalSeparator"></div>
            <div className="footer__contact">
              <h3 className="footer__title">Contact</h3>
              <div className="footer__email">
                <a href="mailto:contact@lostwatch.com">contact@lostwatch.com</a>
              </div>
              <div className="footer__phoneNumber">+33019239938</div>
              <div className="footer__socials">
                <img className="footer__social" src={FacebookIconSrc} />
                <img className="footer__social" src={InstagramIconSrc} />
              </div>
            </div>
          </div>
        </div>
      </BlockContainer>
    </footer>
    <div className="footer__bottom">
      <BlockContainer>
      <div className="footer__copyright">Copyright © 2018 All Rights Reserved</div>
      <span className="footer__legals">{"Conditions générales d'utilisations"}</span>
      </BlockContainer>
    </div>
  </div>
);

export default Footer;

