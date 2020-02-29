import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/layout/navigation.scss';
import homeImg from '../images/home.png';
import userImg from '../images/user.png';
import listImg from '../images/list.png';

const menuList = [
  {
    id: 0,
    name: 'home',
    path: '/',
    img: homeImg
  },
  {
    id: 1,
    name: 'user',
    path: '/user',
    img: userImg
  },
  {
    id: 2,
    name: 'list',
    path: '/list',
    img: listImg
  }
];

const Navigation = () => {
  const menu = menuList.map(item => (
    <li key={item.id}>
      <NavLink to={item.path} exact>
        <img src={item.img} alt="" className="nav_img"/>
      </NavLink>
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