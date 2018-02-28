import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.scss';

const Button = ({ text, onClick, isAlternate }) => {
  const buttonClassnames = classNames({
    'button': true,
    'button--isAlternate': isAlternate,
  })
  return (
    <button
      className={buttonClassnames}
        onClick={onClick}>
      {text}</button>
  )
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isAlternate: PropTypes.bool,
};

export default Button;
