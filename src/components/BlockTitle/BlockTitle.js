import React from 'react';
import PropTypes from 'prop-types';

import './BlockTitle.scss';

const BlockTitle = ({ subtitle, title }) => (
  <div className="blockTitle">
    <div className="blockTitle__subtitle">{subtitle}</div>
    <h2 className="blockTitle__title">{title}</h2>
  </div>
);

BlockTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default BlockTitle;

