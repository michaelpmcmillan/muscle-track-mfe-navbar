import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Helmet from "react-helmet";
import Home from "./navbar-links/home";
import Login from "./navbar-links/login";
import Logout from "./navbar-links/logout";
import Profile from "./navbar-links/profile";
import CaptureWeightLoss from "./navbar-links/capture-weight-loss";

export default function Root(props) {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg">
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
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {Home()}
          {Profile()}
          {CaptureWeightLoss()}
          {Logout()}
          {Login()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
