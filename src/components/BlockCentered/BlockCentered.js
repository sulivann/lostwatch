import React from 'react';
import PropTypes from 'prop-types';

import BlockTitle from '../BlockTitle';

import './BlockCentered.scss';

const BlockCentered = ({ title, subtitle }) => (
  <div className="blockCentered">
    <BlockTitle
      subtitle={subtitle}
      title={title}/>
    <p className="blockCentered__content">{"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500. Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500"}</p>
  </div>
);

BlockCentered.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default BlockCentered;

