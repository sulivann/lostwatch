import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../../Logo';

import './BlockHeaderModal.scss';

const BlockHeaderModal = ({ title, description }) => (
  <div className="blockHeaderModal">
    <Logo
      color='gold'/>
    <h2 className="blockHeaderModal__title">{title}</h2>
    <p className="blockHeaderModal__description">{description}</p>
  </div>
);

BlockHeaderModal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default BlockHeaderModal;
