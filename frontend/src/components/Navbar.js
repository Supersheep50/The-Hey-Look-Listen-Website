import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/HLL-logo.jpg";
import styles from "../styles/Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutisdeToggle";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/posts/create"
    >
      <i className="far fa-plus-square"></i>Add post
    </NavLink>
  );

  const loggedOutIcons = (
    <>
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
    </>
  );

  const loggedInIcons = (
    <>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>

      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink>
    </>
  );

  return (
    <>
      <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
        <Container>
          {/* Updated NavLink around the logo */}
          <NavLink to="/podcasts" className={styles.LogoLink}>
            <Navbar.Brand>
              <img src={logo} alt="logo" height="110" /> {/* Increased logo height */}
            </Navbar.Brand>
          </NavLink>
          <a
            href="https://supersheep50.github.io/hey-look-listen-quiz/"
            className={`${styles.NavLink} ${styles.ExternalLink} ${styles.BoldLink}`} // Added BoldLink class
            target="_blank"
            rel="noopener noreferrer"
          >
            HLL Quiz
          </a>
          <a
            href="https://the-secret-of-the-hll-tomb.herokuapp.com/"
            className={`${styles.NavLink} ${styles.ExternalLink} ${styles.BoldLink}`} // Added BoldLink class
            target="_blank"
            rel="noopener noreferrer"
          >
            HLL Tomb
          </a>
          {currentUser && addPostIcon}
          <Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`ml-auto text-left ${styles.SpacedLinks}`}>
              <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/podcasts"
              >
                <i className="fa-solid fa-microphone"></i>Podcasts
              </NavLink>
              <NavLink
                exact
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/"
              >
                <i className="fa-solid fa-book"></i>Yarns
              </NavLink>
              <NavLink
                to="/blog"
                className={styles.NavLink}
                activeClassName={styles.Active}
              >
                <i className="fa-solid fa-blog"></i>Forum
              </NavLink>
              {currentUser ? loggedInIcons : loggedOutIcons}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={styles.NavBarSpacer}></div> {/* Added Spacer */}
    </>
  );
};

export default NavBar;
