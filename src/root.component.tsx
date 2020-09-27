import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Helmet from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";

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
      </Helmet>
      <Navbar.Brand href="/">Muscle Track</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Nav.Link>
          <Nav.Link href="/login">
            <FontAwesomeIcon icon={faUser} /> Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
