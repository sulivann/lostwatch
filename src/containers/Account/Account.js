import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { openModal, closeModal } from '../../store/actions/modalActions';

import AccountHeader from '../../components/AccountHeader';

import './Account.scss';

class Account extends Component {
  render() {
    return (
      <div className="accountContainer">
        <AccountHeader />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { openModal, closeModal, };

Account.defaultProps = {
  openModal: () => {},
  closeModal: () => {},
};

Account.propTypes = {
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps, null,{
  pure: false
})(Account);
