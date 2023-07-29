import { React } from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <nav>
          <h1>Volunteer app</h1>
          <ul className="nav-links">
            <li>
              <a>Home</a>
            </li>
            <li>Logout</li>
          </ul>
        </nav>
      </div>
      
    </>
  );
}

export default Header;
