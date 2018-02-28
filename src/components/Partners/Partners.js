import React from 'react';

import BlockTitle from '../BlockTitle';
import Partner from '../Partner';

import RolexIconSrc from '../../assets/imgs/rolex.png';
import BreitlingIconSrc from '../../assets/imgs/breitling.png';
import PatekIconSrc from '../../assets/imgs/patek.png';
import JaegerIconSrc from '../../assets/imgs/jaeger.png';

import './Partners.scss';

const Partners = () => (
  <div className="partners">
    <BlockTitle
      subtitle='Découvrez'
      title='Nos partenaires'
    />
    <div className="partners__container">
      <div className="partners__row">
        <Partner
          imgSrc={RolexIconSrc}/>
        <Partner
          imgSrc={BreitlingIconSrc}/>
        <Partner
          imgSrc={PatekIconSrc}/>
        <Partner
          imgSrc={JaegerIconSrc}/>
      </div>
      <div className="partners__row">
        <Partner
          imgSrc={RolexIconSrc}/>
        <Partner
        imgSrc={RolexIconSrc}/>
        <Partner
          imgSrc={RolexIconSrc}/>
      </div>
    </div>
  </div>
);

export default Partners;
