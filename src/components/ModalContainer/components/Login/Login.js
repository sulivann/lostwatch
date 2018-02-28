import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserService from '../../../../services/UserService';

import BlockHeaderModal from '../BlockHeaderModal';
import Input from '../../../Input';
import Button from '../../../Button';

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.error = '';
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const userData = {
      'email': data.get('email'),
      'password': data.get('password'),
    }
    UserService.login(userData).then(response => {
      if(!response.data.error) {
        localStorage.setItem('email', userData.email);
        this.props.closeModal();
      } else {
        this.setState({
          error: 'Identifiant ou mot de passe incorrect',
        })
      }
    });
  }

  render() {
    return (
      <div className="buyingLogin">
        <BlockHeaderModal
          title="Connectez-vous pour obtenir un certificat d'authenticité"
          description="Veuillez renseigner les informations suivantes afin de vous connecter à votre compte."/>
        <form className="buyingLogin__form" onSubmit={(event) => this.handleSubmit(event)}>
          <div className="buyingLogin__inputs">
            <Input
              id='email'
              placeholder='Votre adresse e-mail'
              label='Adresse e-mail*'
              required/>
            <Input
              id='password'
              placeholder='Votre mot de passe'
              label='Mot de passe*'
              password
              required/>
          </div>
          {this.state.error &&
            <div className="buyingLogin__error">{this.state.error}</div>
          }
          <Button
            text="Se connecter"
            isAlternate/>
          <div className="buyingLogin__forgot">Mot de passe oublié ?</div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  closeModal: PropTypes.func.isRequired,
}

export default Login;
