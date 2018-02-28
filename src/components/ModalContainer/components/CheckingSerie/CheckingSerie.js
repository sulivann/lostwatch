import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BlockHeaderModal from '../BlockHeaderModal';
import Loading from '../Loading';

import './CheckingSerie.scss';

class CheckingSerie extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.openModal('serie-confirmation');
    }, 5000);
  }

  render() {
    return (
      <div className="checkingCertificate">
        <BlockHeaderModal
          title='Nous procédons à une analyse du numéro de série'/>
        <Loading />
        <div className="checkingCertificate__label">Veuillez patienter...</div>
      </div>
    );
  }
}

CheckingSerie.propTypes = {
  openModal: PropTypes.func.isRequired,
}

export default CheckingSerie;
