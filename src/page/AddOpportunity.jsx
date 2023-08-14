import { Link, redirect, useNavigate, useSubmit } from "react-router-dom";

export default function AddOpportunity() {
    return (
        <div className="card">
            <div className='col-md 12'>
                <div className="card-header">
                    <h4>Add a Opportunities
                        <Link to='/admin/manageopportunities' className='btn btn-warning float-end'>Back</Link>
                    </h4>
                </div>
                <div className='card-body'>
                    <div className="form-control-sm">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="mb-3">

                                    <label htmlFor='title' class='form-label'>Title </label>
                                    <input type='text' class='form-control' id='title' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">

                                    <label htmlFor='description' class='form-label'>Description</label>
                                    <input type='text' class='form-control' id='description' />
                                </div>
                            </div>
                        </div>
                        <button type='button' className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}