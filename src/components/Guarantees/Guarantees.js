import React from 'react';

import BlockTitle from '../BlockTitle';
import BlockPerk from '../BlockPerk';
import Button from '../Button';

import BadgeSrc from '../../assets/imgs/badge.svg';
import PrintSrc from '../../assets/imgs/print.svg';
import ShieldSrc from '../../assets/imgs/shield.svg';

import './Guarantees.scss';

const Guarantees = () => (
  <div className="guarantees">
    <BlockTitle
      subtitle='Les garanties'
      title='Lostwatch'/>
    <div className="guarantees__perks">
      <BlockPerk
        iconSrc={BadgeSrc}
        title='Un gage de réassurance'
        label='Une garantie'
        text='Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.'/>
      <BlockPerk
        iconSrc={PrintSrc}
        title='Des certificats uniques'
        label='Nos certificats'
        text='Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.'/>
      <BlockPerk
        iconSrc={ShieldSrc}
        title='Une base de données fiable'
        label='Nos fichiers'
        text='Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.'/>
    </div>
    <Button
      text='En savoir plus'/>
  </div>
);

export default Guarantees;

