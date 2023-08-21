import { React } from "react";
import "./Header.css";
import { Link,useNavigate } from "react-router-dom";
import { removeToken } from "../util/authentication";

function Header() {
  const navigate = useNavigate();

  function logout() {
    console.log("hi");
    removeToken();
    navigate("/");
  }

  return (
    <>
      <div className="header">
        <nav>
          <Link to="/admin" className="link">
            <h1>Volunteer app</h1>
          </Link>
          <ul className="nav-links">
            <li>
              <button
                className="btn btn-success"
                onClick={(event) => {
                  navigate("/admin");
                }}
              >
                Home
              </button>
            </li>
            <button className="btn btn-primary" onClick={logout}>
              Logout
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
