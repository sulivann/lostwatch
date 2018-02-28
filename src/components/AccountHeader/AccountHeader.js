import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import BlockContainer from '../BlockContainer';
import BlockSetting from '../BlockSetting';

import './AccountHeader.scss';

const AccountHeader = ({ openModal }) => (
  <div className="homeHeader accountHeader">
    <div className="homeHeader__container">
      <Logo
        color='gold'/>
      <h2 className="homeHeader__title">Mon compte</h2>
      <BlockContainer>
        <div className="accountHeader__settings">
          <BlockSetting />
          <BlockSetting />
          <BlockSetting />
        </div>
      </BlockContainer>
    </div>
  </div>
);

AccountHeader.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default AccountHeader;

