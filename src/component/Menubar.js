import React from "react";
import "./Menubar.css"
import { Link } from "react-router-dom";

function Menubar() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Display ID</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Menubar;
