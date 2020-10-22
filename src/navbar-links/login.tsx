import React from "react";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { isLoggedIn } from "../plugin/identity";

export default function Login() {
  return (
    <>
      {!isLoggedIn() && (
        <Nav.Link href="/login">
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </Nav.Link>
      )}
    </>
  );
}
