import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1>This is landing page</h1>

      <Link to="/unit1">
        <button>University 1</button>
      </Link>

      <Link to="/unit2">
        <button>University 2</button>
      </Link>
    </div>
  );
}

export default Landing;
