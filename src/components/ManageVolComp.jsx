import { React } from "react";
import { useState } from "react";
import SearchAndFilter from "./SearchAndFilter";
import "./ManageVolComp.css";
import { Link, redirect, useNavigate, useSubmit } from "react-router-dom";
import ConfirmDelete from "./ConfirmDelete";

export function ManageVolComp(props) {

  const navigate = useNavigate();
  const submit = useSubmit();

  const [active, setActive] = useState({Active: false, id: -1});  
  
  const data = props.value;
  
  function pop(id) {
    setActive({Active:true, id:id});
  }
  
  function reverserPop(holdValue) {
      
      if(holdValue.onActive){

        setActive({Active: false, id: holdValue.holdId});
           
      }else{
        setActive({Active: holdValue.onActive, id: holdValue.holdId});
      }

      if(holdValue.onActive){
          submit({val: active.id}, {method: "delete"});
      }
  }


  return (
    <>
      <SearchAndFilter />
      {active.Active && <ConfirmDelete value={active.Active} value2={active.id} reverse={reverserPop} />}

      <Link to='/admin' id="move"  className='btn btn-warning float-end'>Back</Link>
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
                <tbody>
                  {data.map((item) => (
                    <tr key={item.VolunteerID}>
                      <td>{item.VolunteerID}</td>
                      <td>{item.Fname}</td>
                      <td>{item.Lname}</td>
                      <td>yes</td>
                      <td>{item.Approval_Status}</td>
                      <td>
                        <Link to="/" className="btn btn-success">
                          Edit
                        </Link>
                      </td>
                      <td>
                      <button onClick={event => pop(item.VolunteerID)} className="btn btn-danger">
                        Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageVolComp;
