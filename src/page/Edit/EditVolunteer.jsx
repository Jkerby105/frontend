import React, { useEffect, useState } from "react";
import { Link, redirect, Form, useLoaderData } from "react-router-dom";

export function EditVolunteer() {
  const data = useLoaderData();
  const [opportunitiesData, opportunitiesDataSet] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/opportunities")
      .then((response) => {
        return response
          .json()
          .then((data) => {
            opportunitiesDataSet(data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card">
      <Form method="POST" action={`/admin/managevolunteers/editVolunteer/${data[0].VolunteerID}`}>
        <div className="form-control-sm">
          <div className="row g-3">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstName"
                  defaultValue={data[0].Fname}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="lasttName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastName"
                  defaultValue={data[0].Lname}
                />
              </div>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="usernamer" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="userName"
                  defaultValue={data[0].Username}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  defaultValue={data[0].Password}
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              defaultValue={data[0].Email}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="time" className="form-label">
              Opportunities
            </label>
            {opportunitiesData ? (
              <select id="Select" className="form-select" name="opp">
                {opportunitiesData.map((item) => (
                  <option
                    key={item.OpportunitiesID}
                    value={item.OpportunitiesID}
                  >
                    {item.Title}
                  </option>
                ))}
              </select>
            ) : (
              <p>Loading opportunities...</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="skills" className="form-label">
              Skills/Interests
            </label>
            <input
              type="text"
              className="form-control"
              id="skills"
              name="skills"
              defaultValue={data[0].Skills_Interests}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="time" className="form-label">
              Days and Time Available
            </label>
            <select id="Select" className="form-select" name="dayTime">
              <option>Sunday: (10:00am - 12:00pm)</option>
              <option>Monday: (4:30pm - 6:30pm)</option>
              <option>Tuesday: (5:00pm - 8:00pm)</option>
              <option>Wednesday: (9:00am - 11:00am )</option>
              <option>Thursday: (4:30pm - 6:30pm)</option>
              <option>Friday: (10:00am - 12:00pm)</option>
              <option>Saturday: (9:00am - 12:00pm)</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              defaultValue={data[0].Address}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Enter a phone number:
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="xxx-xxx-xxxx"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              defaultValue={data[0].Phone_Number}
              required
            />
            <small>Format: 123-451-6781</small>
          </div>

          <div className="mb-3">
            <label htmlFor="Select" className="form-label">
              Select highest completed education
            </label>
            <select id="Select" className="form-select" name="education">
              <option>High school/GED</option>
              <option>Associate degree</option>
              <option>Bachelors degree</option>
              <option>Masters degree</option>
              <option>Doctorate/Professional degree</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="licenses" className="form-label">
              licenses
            </label>
            <input
              type="text"
              className="form-control"
              id="licenses"
              name="licenses"
              defaultValue={data[0].Licenses}
            />
          </div>
        </div>

        <button type='submit' className="btn btn-success">Submit</button>
      </Form>
    </div>
  );
}

export async function loader({ request, params }) {
  const id = params.id;

  const response = await fetch("http://localhost:3001/volunteer/" + id, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  }
}

export async function action({ request, params }) {
  const id = params.id;
  const data = await request.formData();

  const info = {
    ID : id,
    Email: data.get('email'),
    Fname: data.get('firstName'),
    Lname: data.get('lastName'),
    Username: data.get('userName'),
    Password: data.get('password'),
    Opportunity : data.get('opp'),
    Skills: data.get('skills'),
    Time: data.get('dayTime'),
    Address: data.get('address'),
    Phone: data.get('phone'),
    Education: data.get('education'),
    Licenses: data.get('licenses'),
  }


  const response = await fetch("http://localhost:3001/volunteer/Edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  });

  if (response.ok) {
    return redirect("/admin/managevolunteers");
  }
}
