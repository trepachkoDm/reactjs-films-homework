/* eslint-disable react/prop-types */
import React from 'react';
import { Logo, Search } from '../index';
import styles from './Header.scss';

const Header = ({ search }) => (
  <header className={styles.header}>
    <Logo />
    <Search search={search} />
  </header>
);

export default Header;
