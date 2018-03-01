import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Logo.scss';

const Logo = ({ color }) => {
  const logoClasses = classNames(
    'logo',
    `logo--${color}`,
  );

  return (
    <svg className={logoClasses} width="34" height="25" xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M12.038 5.68c-1.385 1.443-1.384 3.78.004 5.221L16.95 16l.612-9.876.559 9.808 4.84-5.037c1.385-1.444 1.384-3.781-.004-5.222L17.495 0l-5.457 5.68zM14.936 17.33l-4.722-5.212c-1.353-1.492-3.545-1.49-4.896.004L0 18.005l5.325 5.877c1.352 1.492 3.544 1.49 4.895-.004L15 18.591l-9.259-.659 9.195-.602zM23.78 12.122L19 17.409l9.259.659-9.195.602 4.722 5.212c1.353 1.492 3.545 1.49 4.896-.004L34 17.995l-5.325-5.876c-1.352-1.493-3.544-1.492-4.895.003z"/>
      </g>
    </svg>
  )
};

Logo.propTypes = {
  color: PropTypes.string.isRequired,
}

export default Logo;
