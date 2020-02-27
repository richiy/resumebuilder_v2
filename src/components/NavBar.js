import React, { Component } from "react";
import './NavBar.css';
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.OpenCheeseBurgerMenu = this.OpenCheeseBurgerMenu.bind(this);
  }

  OpenCheeseBurgerMenu(){
      //opens and closes hamburger menu
      let menuClassName = document.getElementsByClassName('navbar-burger')[0].className;
      let menuIsActive = (menuClassName.includes('is-active')) ? true : false;
      if(menuIsActive){
        document.getElementsByClassName('navbar-burger')[0].className = "navbar-burger";
        document.getElementsByClassName('cheeseburger-menu')[0].style.height = '0px';

      }else{
        document.getElementsByClassName('navbar-burger')[0].className = "navbar-burger is-active";
        document.getElementsByClassName('cheeseburger-menu')[0].style.height = 'auto';

      }
  }

  render() {
    return (
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">


    <a onClick={this.OpenCheeseBurgerMenu} role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="cheeseburger-menu">
      <ul>
      <li><a href="#">HOME</a></li>
      <li><a href="#">BLOG</a></li>
      <li><a href="#">ABOUT</a></li>
      </ul>
  </div>

</nav>
    );
  }
}

export default NavBar;
