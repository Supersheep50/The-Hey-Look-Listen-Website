import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/HLL-logo.jpg";
import styles from "../styles/Navbar.module.css";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../App";



const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="55" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fa-solid fa-microphone"></i>Home
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/signin"
            >
              <i className="fas fa-sign-in-alt"></i>Sign in
            </NavLink>
            <NavLink
              to="/signup"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fas fa-user-plus"></i>Sign up
            </NavLink>
            <NavLink
              to="/yarns"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fa-solid fa-book"></i>Gaming Yarns
            </NavLink>
            <NavLink
              to="/blog"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fa-solid fa-blog"></i>Blog
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;