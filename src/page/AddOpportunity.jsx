import { Link, redirect,Form } from "react-router-dom";
import { tokenLoader } from "../util/authentication";

export function AddOpportunity() {
  return (
    <Form method="post" action="/admin/manageopportunities/add">
      <div className="card">
        <div className="col-md 12">
          <div className="card-header">
            <h4>
              Add a Opportunities
              <Link
                to="/admin/manageopportunities"
                className="btn btn-warning float-end"
              >
                Back
              </Link>
            </h4>
          </div>
          <div className="card-body">
            <div className="form-control-sm">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title{" "}
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      id="title"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      id="description"
                    />
                  </div>
                </div>
              </div>
              <button type="sumit" className="btn btn-success">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}

export async function action({ request, params }) {
  const value = await request.formData();
  const token = tokenLoader();

  const data = {
    Title: value.get("title"),
    Description: value.get("description"),
  };

  const response = await fetch("http://localhost:3001/opportunities", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return redirect("/admin/manageopportunities");
  }
}
