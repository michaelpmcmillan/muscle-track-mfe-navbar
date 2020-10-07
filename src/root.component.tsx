import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Helmet from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHome,
  faSignInAlt,
  faSignOutAlt,
  faWeight,
} from "@fortawesome/free-solid-svg-icons";
import netlifyIdentity from "netlify-identity-widget";

netlifyIdentity.init();

const isLoggedIn = () => {
  return netlifyIdentity && netlifyIdentity.currentUser();
};

const username = () => {
  const {
    app_metadata,
    created_at,
    confirmed_at,
    email,
    id,
    user_metadata: { full_name },
  } = netlifyIdentity.currentUser();

  return full_name;
};

const handleLogin = async () => {
  await netlifyIdentity.open();
};

const handleLogout = async () => {
  await netlifyIdentity.logout();
  window.location.reload();
};

export default function Root(props) {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg" sticky="top">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossOrigin="anonymous"
        ></link>
        <script
          type="text/javascript"
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        ></script>
      </Helmet>
      <Navbar.Brand href="/">Muscle Track</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Nav.Link>
          {isLoggedIn() && (
            <Nav.Link href="/capture/weight-loss">
              <FontAwesomeIcon icon={faWeight} /> Measure
            </Nav.Link>
          )}
          {isLoggedIn() && (
            <a className="nav-link" onClick={handleLogout} href="#">
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </a>
          )}
          {!isLoggedIn() && (
            <a className="nav-link" onClick={handleLogin} href="#">
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </a>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
