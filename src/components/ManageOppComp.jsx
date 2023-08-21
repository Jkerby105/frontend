import { Link,useSubmit } from "react-router-dom";
import { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";
export default function ManageOppCom(props) {
  const submit = useSubmit();

  const [active, setActive] = useState({ Active: false, id: -1 });

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

  //fix data.map so it is clean code
  var oppDetail = "";
  var oppDetail = props.value.map((item) => {
    return (
      <tr key={item.OpportunitiesID}>
        <td>{item.Title}</td>
        <td>{item.Description}</td>
        <td>
          <Link
            to={`/admin/manageopportunities/edit/${item.OpportunitiesID}`}
            className="btn btn-success"
          >
            Edit
          </Link>
        </td>
        <td>
          <button
            onClick={(event) => pop(item.OpportunitiesID)}
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
                Manage opportunities
                <Link
                  to="/admin/manageopportunities/add"
                  className="btn btn-primary float-end"
                >
                  Add opportunity
                </Link>
              </h4>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Opportunity</th>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>{oppDetail}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
