import React from 'react';
import { Link } from 'react-router-dom';

const LinkItems = props => {
  const navItemsList = props.items.map((element, index) => <li className={props.listItemsWrapper ? props.listItemsWrapper.listItems.class : ''} key={index}><Link to={element.href} className={element.class || ''} title={element.title}>{element.text}</Link></li>)
  return (
    <ul className={props.listItemsWrapper ? props.listItemsWrapper.class : ''}>
      {navItemsList}
    </ul>
  )
};

export default LinkItems;