import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserService from '../../../../services/UserService';

import BlockHeaderModal from '../BlockHeaderModal';
import Input from '../../../Input';
import Button from '../../../Button';

import './Register.scss';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.error = '';
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    if (data.get('re-password') === data.get('password')) {
      const userData = {
        'email': data.get('email'),
        'password': data.get('password'),
      }
      UserService.signUp(userData).then(response => {
        localStorage.setItem('email', userData.email);
      });
      this.props.openModal('register-confirmation');
    } else {
      this.setState({
        error: 'Les mots de passe ne correspondent pas',
      })
    }
  }

  render() {
    return (
      <div className="buyingRegister">
        <BlockHeaderModal
          title="S’inscrire pour obtenir un certificat d'authenticité"
          description="Veuillez renseigner les informations suivantes afin de procéder à l’obtention de votre certificat"/>
        <form className="buyingRegister__form" onSubmit={(event) => this.handleSubmit(event)}>
          <div className="buyingRegister__row">
            <Input
              id='name'
              placeholder='Votre nom'
              label='Nom*'
              required/>
            <Input
              id='password'
              placeholder='Votre mot de passe'
              label='Mot de passe*'
              password
              required/>
            <Input
              id='email'
              placeholder='Votre adresse e-mail'
              label='Adresse e-mail*'
              required/>
          </div>
          <div className="buyingRegister__row">
            <Input
              id='lastname'
              placeholder='Votre prénom'
              label='Prénom*'
              required/>
            <Input
              id='re-password'
              placeholder='Votre mot de passe'
              label='Confirmer votre mot de passe*'
              password
              required/>
            <Button
              text="S'inscrire"
              isAlternate/>
          </div>
        </form>
        {this.state.error &&
          <div className="buyingRegister__error">{this.state.error}</div>
        }
      </div>
    );
  }
}

Register.propTypes = {
  openModal: PropTypes.func.isRequired,
}

export default Register;
