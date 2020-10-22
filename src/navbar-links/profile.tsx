import React from "react";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { isLoggedIn } from "../plugin/identity";

export default function Profile() {
  return (
    <>
      {isLoggedIn() && (
        <Nav.Link href="/profile">
          <FontAwesomeIcon icon={faAddressCard} /> Profile
        </Nav.Link>
      )}
    </>
  );
}
