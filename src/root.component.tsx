import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/" className="link">
          Home
        </Link>
      </nav>
    </BrowserRouter>
  );
}
