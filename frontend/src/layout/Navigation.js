import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/layout/navigation.scss';

const menuList = [
  {
    id: 0,
    name: 'home',
    path: '/'
  },
  {
    id: 1,
    name: 'contact',
    path: '/contact'
  },
  {
    id: 2,
    name: 'about',
    path: '/about'
  }
];

const Navigation = () => {
  const menu = menuList.map(item => (
    <li key={item.id}>
      <NavLink to={item.path} exact>{item.name}</NavLink>
    </li>
  ));

  return(
    <div className="navigation">
      <ul>
        {menu}
      </ul>
    </div>
  );
}

export default Navigation;