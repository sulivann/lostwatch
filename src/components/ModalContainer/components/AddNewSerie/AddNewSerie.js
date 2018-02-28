import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BlockHeaderModal from '../BlockHeaderModal';
import Input from '../../../Input';
import Button from '../../../Button';

import './AddNewSerie.scss';

class AddNewSerie extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.select = {
      updated: false,
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.openModal('checking-serie');
  }

  handleSelectChange(event) {
    this.setState({
      select: {
        updated: true,
      }
    });
  }

  render() {
    const selectClass = classNames({
      'select': true,
      'select--isChanged': this.state.select.updated,
    });

    return (
      <div className="buyCertificate">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <BlockHeaderModal
            title='Déclarer une montre volée ou perdue'
            description='Déclarer une montre volée ou perdue vous permet d’être notifé si celle-ci est retrouvée.'/>
          <div className="buyCertificate__inputs">
            <div className={selectClass}>
              <label htmlFor="id" className="input__label">Marque de votre montre</label>
              <div className="select__wrapper">
                <select id="brand" required onChange={(event) => this.handleSelectChange(event)}>
                  <option value="" className="select__placeholder" disabled selected>Votre marque</option>
                  <option value="rolex">Rolex</option>
                  <option value="breitling">Breitling</option>
                  <option value="patek">Patek Philippe</option>
                </select>
              </div>
            </div>
            <Input
              id='serie'
              placeholder='Numéro de série'
              label='Numéro de série'/>
            <Input
              id='modele'
              placeholder='Saisir un modèle'
              label='Modèle (facultatif)'/>
          </div>
          <Button
            text="Passer à l'étape suivante"
            isAlternate/>
        </form>
      </div>
    );
  }
}

AddNewSerie.propTypes = {
  openModal: PropTypes.func.isRequired,
}

export default AddNewSerie;
