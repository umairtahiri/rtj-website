import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import { navigate } from "@reach/router";
import "./styles.scss";

class TopBar extends Component {
  state = {
    isWideEnough: false,
    collapse: false,
  };

  imgStyle = {
    width: "50px",
    height: "50px",
  };

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };

  handleNavigation = (path) => {
    navigate(path);
  };

  render() {
    const { collapse, isWideEnough } = this.state;
    return (
      <MDBNavbar
        color="bg-primary"
        fixed="top"
        dark
        expand="md"
        scrolling
        transparent
      >
        <MDBNavbarBrand href="/">
          <img style={this.imgStyle} src="static/images/rtj-logo.png" alt="" />
        </MDBNavbarBrand>
        {!isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
        <MDBCollapse isOpen={collapse} navbar>
          <MDBNavbarNav right>
            <MDBNavItem className="navbar-action">
              <MDBNavLink to="/" onClick={() => this.handleNavigation("/")}>
                Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="navbar-action">
              <MDBNavLink to="/rtj-agendas" onClick={() => this.handleNavigation("/rtj-agendas")}>
                5 Core Agendas
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="navbar-action">
              <MDBNavLink to="#">Media</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="navbar-action">
              <MDBNavLink to="#">Why RTJ</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="navbar-action">
              <MDBNavLink to="#">Events</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default TopBar;
