import React from "react";
import { Link, redirect, Form, useLoaderData } from "react-router-dom";
import { tokenLoader } from "../../util/authentication";

export function EditOpportunity() {
  const data = useLoaderData();

  return (
    <Form
      method="post"
      action={`/admin/manageopportunities/edit/${data[0].OpportunitiesID}`}
    >
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
                      defaultValue={data[0].Title}
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
                      defaultValue={data[0].Description}
                    />
                  </div>
                </div>
              </div>
              <button type="sumit" className="btn btn-success">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}

export async function loader({ request, params }) {
  const id = params.id;

  const token = tokenLoader();

  const response = await fetch("http://localhost:3001/opportunities/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  }
}

export async function action({ request, params }) {
  const id = params.id;
  const value = await request.formData();

  const token = tokenLoader();

  const data = {
    Title: value.get("title"),
    Description: value.get("description"),
    Edit: true,
    Id: id,
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
