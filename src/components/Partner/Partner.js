import React from 'react';
import PropTypes from 'prop-types';

import './Partner.scss';

const Partner = ({ imgSrc }) => (
  <div className="partner">
    <img src={imgSrc} />
  </div>
);

Partner.propTypes = {
  imgSrc: PropTypes.string,
}

export default Partner;
