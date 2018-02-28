import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { openModal, closeModal } from '../../store/actions/modalActions';
import { getModalIsActive, getModalContent } from '../../store/reducers/modalReducer';

import StickyHeader from '../../components/StickyHeader';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';

import Router from '../../router';

class App extends Component {
  render() {
    return (
      <div>
        <StickyHeader
          openModal={this.props.openModal}/>
        <Router />
        <Footer />
        <Modal
          isActive={this.props.modalIsActive}
          modalContent={this.props.modalContent}
          closeModal={this.props.closeModal}
          openModal={this.props.openModal}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modalIsActive: getModalIsActive(state),
  modalContent: getModalContent(state),
});

const mapDispatchToProps = { openModal, closeModal, };

App.defaultProps = {
  modalIsActive: false,
  modalContent: '',
  openModal: () => {},
  closeModal: () => {},
};

App.propTypes = {
  modalIsActive: PropTypes.bool,
  modalContent: PropTypes.string,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps, null,{
  pure: false
})(App);
