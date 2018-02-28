import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { openModal, closeModal } from '../../store/actions/modalActions';

import HomeHeader from '../../components/HomeHeader';
import BlockContent from '../../components/BlockContent';
import BlockContainer from '../../components/BlockContainer';
import Guarantees from '../../components/Guarantees';
import Partners from '../../components/Partners';

import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <HomeHeader
          openModal={this.props.openModal}/>
        <BlockContainer>
          <BlockContent />
          <Guarantees />
        </BlockContainer>
        <Partners />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { openModal, closeModal, };

Home.defaultProps = {
  openModal: () => {},
  closeModal: () => {},
};

Home.propTypes = {
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps, null,{
  pure: false
})(Home);
