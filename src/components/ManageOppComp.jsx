import { Link, redirect, useNavigate, useSubmit } from "react-router-dom"; 
export default function ManageOppCom() {
    return (
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
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

)
}