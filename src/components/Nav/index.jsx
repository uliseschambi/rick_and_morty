import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css';

const Nav = ({ onSearch }) => {
  return (
    <nav className={style.nav}>
      <NavLink to="/home" className={({ isActive }) => (isActive ? style.active : style.button)}>
        HOME
      </NavLink>
      <NavLink to="/favorites" className={({ isActive }) => (isActive ? style.active : style.button)}>
        FAVORITES
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? style.active : style.button)}>
        ABOUT
      </NavLink>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;
