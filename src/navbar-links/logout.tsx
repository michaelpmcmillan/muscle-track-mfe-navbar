import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { logout, isLoggedIn } from "../plugin/identity";
import Nav from "react-bootstrap/Nav";

export default function Logout() {
  return (
    <>
      {isLoggedIn() && (
        <Nav.Link onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </Nav.Link>
      )}
    </>
  );
}
