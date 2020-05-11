import React from "react";
import "../NavBar/NavBar.css";
import Hamburger from '../../assets/hamburger.svg';
const NavigationBar = () => {

  const hamburgerClickHandler=()=>{
    console.log('clicked');
  }

  return (
    <header className="main-container">
      <nav className="navbar-main-container">
        <div className="main-logo">
          <a href='/'>Marée</a>
        </div>
        <div className='spacer' />
        <div className='navbar-items'>
        <ul>
             <li><a href='/'>Products</a></li>
             <li><a href='/'>Pages</a></li>
             <li><a href='/'>Portfolio</a></li>
             <li><a href='/'>Blog</a></li>
             <li><a href='/'>Shop</a></li>
             <li><a href='/'>Element</a></li>
             </ul>
        </div>
        <div className='hamburger'>
          <img src={Hamburger} alt='hamburger-img' className='hamburger' onClick={hamburgerClickHandler}></img>
        </div>

       
      </nav>
    </header>
  );
};
export default NavigationBar;
