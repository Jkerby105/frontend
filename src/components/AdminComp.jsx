import "./AdminComp.css";
import { Link} from "react-router-dom";

export default function AdminComp() {
  return (
    <>
      <div className="App">
        <div className="options">
          <button>
            <Link to="/admin/managevolunteers" className="link">
              <b>Manage volunteers</b>
            </Link>
          </button>
          <button>
            <Link to="/admin/manageopportunities" className="link">
              <b>Manage oppprtunities</b>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
