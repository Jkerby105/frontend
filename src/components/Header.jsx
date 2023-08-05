import { React } from "react";
import "./Header.css";
import {Link, Route, Routes} from 'react-router-dom';
function Header() {
  return (
    <>
      <div className="header">
        <nav>
          <Link to ='/' className='link' ><h1>Volunteer app</h1></Link>
          <ul className="nav-links">
            <li>
              <Link to ='/'>Home</Link>
            </li>
            <li>Logout</li>
          </ul>
        </nav>
      </div>
      
    </>
  );
}

export default Header;
