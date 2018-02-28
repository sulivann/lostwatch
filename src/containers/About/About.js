import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { openModal, closeModal } from '../../store/actions/modalActions';

import AboutHeader from '../../components/AboutHeader';
import BlockContainer from '../../components/BlockContainer';
import BlockTwoColumns from '../../components/BlockTwoColumns';
import BlockCentered from '../../components/BlockCentered';

import './About.scss';

class About extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <AboutHeader
          openModal={this.props.openModal}/>
        <BlockContainer>
          <BlockTwoColumns/>
        </BlockContainer>
        <BlockCentered
          subtitle='Obtenir'
          title={"Un certificat d'origine"}/>
        <BlockCentered
          subtitle='Déclarez'
          title={"Une montre volée ou perdue"}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { openModal, closeModal, };

About.defaultProps = {
  openModal: () => {},
  closeModal: () => {},
};

About.propTypes = {
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps, null,{
  pure: false
})(About);
