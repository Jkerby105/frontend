import { React } from "react";
import { useState } from "react";
import SearchAndFilter from "./SearchAndFilter";
import "./ManageVolComp.css";
import { Link,useNavigate, useSubmit } from "react-router-dom";
import ConfirmDelete from "./ConfirmDelete";
import ConfirmDelete2 from "./ConfirmDelete2";

export function ManageVolComp(props) {
  console.log("westside");

  const navigate = useNavigate();
  const submit = useSubmit();

  const [active, setActive] = useState({ Active: false, id: -1 });
  const [active2, setActive2] = useState({ Active: false, id: -1 });

  //for search
  const [searchResults, setSearchResults] = useState(null);
  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const data = props.value;
  const displayData = searchResults || data;

  function pop(id) {
    setActive({ Active: true, id: id });
  }

  function reverserPop(holdValue) {
    if (holdValue.onActive) {
      setActive({ Active: false, id: holdValue.holdId });
    } else {
      setActive({ Active: holdValue.onActive, id: holdValue.holdId });
    }

    if (holdValue.onActive) {
      submit({ val: active.id }, { method: "delete" });
    }
  }

  function Edit(VolunteerID, EmergencyID) {
    setActive2({ Active: true, id: { vol: VolunteerID, emerg: EmergencyID } });
  }

  function reverseEdit(holdValue) {
    if (holdValue.onActive) {
      setActive2({ Active: false, id: holdValue.holdId });
    } else {
      setActive2({ Active: holdValue.onActive, id: holdValue.holdId });
    }

    if (holdValue.onActive) {
      if (holdValue.location === "Volunteer") {
        navigate("/admin/managevolunteers/editVolunteer/" + holdValue.holdId);
      } else {
        navigate("/admin/managevolunteers/editContact/" + holdValue.holdId);
      }
    }
  }

  //fix data.map so it is clean code
  var userDetails = "";
  var userDetails = displayData.map((item) => {
    return (
      <tr key={item.VolunteerID}>
        <td>{item.VolunteerID}</td>
        <td>{item.Fname}</td>
        <td>{item.Lname}</td>
        <td>{item.Title}</td>
        <td>{item.Approval_Status}</td>
        <td>
          <button
            onClick={(event) => Edit(item.VolunteerID, item.EContactID)}
            className="btn btn-success"
          >
            Edit
          </button>
        </td>
        <td>
          <button
            onClick={(event) => pop(item.VolunteerID)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  //

  return (
    <>
      <SearchAndFilter onSearchResults={handleSearchResults} />

      {active2.Active && (
        <ConfirmDelete2
          value={active2.Active}
          value2={active2.id}
          reverse={reverseEdit}
        />
      )}

      {active.Active && (
        <ConfirmDelete
          value={active.Active}
          value2={active.id}
          reverse={reverserPop}
        />
      )}

      <Link to="/admin" id="move" className="btn btn-warning float-end">
        Back
      </Link>
      <div className="container">
        <div className="col-md 12">
          <div className="card">
            <div className="card-header">
              <h4>
                Manage volunteers
                <Link
                  to="/admin/managevolunteers/add"
                  className="btn btn-primary float-end"
                >
                  Add Volunteer
                </Link>
              </h4>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Opportunities</th>
                    <th>Approval status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>{userDetails}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageVolComp;
