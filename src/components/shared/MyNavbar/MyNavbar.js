import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactsrap';

import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;

    const buildNavbar = () => {
      const { authed }
      if (authed)
    }
    return (
      <div className="MyNavbar">
        {/* <h1>My Navbar</h1>
        <button className="btn btn-danger" onClick={this.logMeOut}>Logout</button> */}
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Scat Surprise</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
        {buildNavbar()}
        </Collapse>
      </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
