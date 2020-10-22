import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { logout, isLoggedIn } from "../plugin/identity";

export default function Logout() {
  return (
    <>
      {isLoggedIn() && (
        <a className="nav-link" onClick={logout} href="#">
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </a>
      )}
    </>
  );
}
