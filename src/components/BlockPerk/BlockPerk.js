import React from 'react';
import PropTypes from 'prop-types';

import './BlockPerk.scss';

const BlockPerk = ({ iconSrc, title, label, text }) => (
  <div className="blockPerk">
    <div className="blockPerk__title">
      <img className="blockPerk__titleIcon" src={iconSrc} />
      <span className="blockPerk__titleText">{title}</span>
    </div>
    <div className="blockPerk__separator"></div>
    <h3 className="blockPerk__label">
      <span className="blockPerk__labelCube"></span>
      <span className="blockPerk__labelText">{label}</span>
    </h3>
    <p className="blockPerk__content">
      {text}
    </p>
  </div>
);

BlockPerk.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default BlockPerk;
