import React from "react";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Nav.Link href="/">
        <FontAwesomeIcon icon={faHome} /> Home
      </Nav.Link>
    </>
  );
}
