import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({ id, label, placeholder, password, required }) => {
  const type = password ? 'password' : 'text';

  return (
    <div className="input">
      <label className="input__label" htmlFor={id}>{label}</label>
      <input className="input__field" type={type} id={id}  name={id} placeholder={placeholder} required={required}/>
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  password: PropTypes.boolean,
  required: PropTypes.boolean,
};

export default Input;
