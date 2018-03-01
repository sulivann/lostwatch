import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ModalContainer from '../ModalContainer';

import CloseIconSrc from '../../assets/imgs/close-icon.svg';

import './Modal.scss';

class Modal extends Component {

  componentDidUpdate(prevProps) {
    const activeToInactiveModal = prevProps.isActive && !this.props.isActive;
    const inactiveToActiveModal = !prevProps.isActive && this.props.isActive;

    if (activeToInactiveModal) {
      document.body.classList.remove('no-scroll');
    } else if (inactiveToActiveModal) {
      document.body.classList.add('no-scroll');
    }
  }

  onEchapKey = (evt) => {
    const escKeyIsPressed = evt.keyCode === 27;

    if (escKeyIsPressed) {
      this.props.closeModal();
    }
  }

  render() {
    const modelClasses = classNames('modal');

    const element = (
      <div className={modelClasses}>
        <div
          className="modal__overlay"
          onKeyPress={this.onEchapKey}
          role="presentation"
        />
        <div className="modal__contentWrapper">
          <div className="modal__content">
            <ModalContainer
              modalContent={this.props.modalContent}
              openModal={this.props.openModal}
              closeModal={this.props.closeModal}
            />
            <img
              src={CloseIconSrc}
              className="modal__closeIcon"
              onClick={() => this.props.closeModal()}/>
          </div>
        </div>
      </div>
    );

    return this.props.isActive ? element : null;
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  modalContent: PropTypes.string,
};

export default Modal;
