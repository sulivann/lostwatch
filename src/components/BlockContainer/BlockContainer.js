import React from 'react';
import PropTypes from 'prop-types';

import './BlockContainer.scss';

const BlockContainer = ({ children }) => (
    <div className="blockContainer">
      {children}
    </div>
);

BlockContainer.propTypes = {
  children: PropTypes.any.isRequired,
}

export default BlockContainer;

