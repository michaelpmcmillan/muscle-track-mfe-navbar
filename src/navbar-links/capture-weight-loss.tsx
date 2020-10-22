import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeight } from "@fortawesome/free-solid-svg-icons";
import { isEnabled } from "../plugin/feature-toggle";
import { isLoggedIn } from "../plugin/identity";

export default function CaptureWeightLoss() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    isEnabled("captureweightloss").then((enabled) => setEnabled(enabled));
  }, []);

  return (
    <>
      {enabled && isLoggedIn() && (
        <Nav.Link href="/capture/weight-loss">
          <FontAwesomeIcon icon={faWeight} /> Measure
        </Nav.Link>
      )}
    </>
  );
}
