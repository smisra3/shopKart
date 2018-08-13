import React from 'react';
import { Link } from 'react-router-dom';

import '../assests/styles/components/AsideNavBar.css';

const AsideNavBar = props => {
  const list = props.list.map((element, index) => {
    return (
      <li key={index} className="l-padding l-text-align-center">
        <Link to={'/CommonData/' + element.id.toString()} title={element.title}>{element.productName}</Link>
      </li>
    )
  });
  return (
    <ul className="col-3 aside-nav-bar">
      <li className="l-padding l-text-align-center">Categories</li>
      {list}
    </ul>
  );
};

export default AsideNavBar;