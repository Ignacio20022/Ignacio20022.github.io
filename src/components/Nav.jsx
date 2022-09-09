import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import styles from "./Nav.module.css"

function Nav({ onSearch }) {
    return (
      <div className={styles.barra}>
        <Link to='/'>
        <div className="imagen">
          <img src={Logo} alt="logo" />
        </div>
        <span className={styles.text}> HENRY 29C - Weather App</span>
        </Link>
        <Link to='/about'>
            <span className={styles.about}>About</span>
        </Link>
        {/* <Link to='/'> */}
            <SearchBar onSearch={onSearch} />
        {/* </Link> */}
      </div>
    );
  }
  
  export default Nav;