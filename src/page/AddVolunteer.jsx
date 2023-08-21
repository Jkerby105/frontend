import { Form, Link, redirect } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { tokenLoader } from "../util/authentication";

//break into components after styling
export function Addvolunteer() {
  const holdData = useLoaderData();

  return (
    <>
      <div className="card">
        <div className="col-md 12">
          <div className="card-header">
            <h4>
              Add a volunteer
              <Link
                to="/admin/managevolunteers"
                className="btn btn-warning float-end"
              >
                Back
              </Link>
            </h4>
          </div>
          <Form method="POST" action="/admin/managevolunteers/add">
            <div className="card-body">
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
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="time" className="form-label">
                    Opportunities
                  </label>
                  <select id="Select" className="form-select" name="opp">
                    {holdData.map((item) => (
                      <option
                        key={item.OpportunitiesID}
                        value={item.OpportunitiesID}
                      >
                        {item.Title}
                      </option>
                    ))}
                  </select>
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
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="contacts" className="form-label">
                    Emergency contact First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    name="emergencyFirstName"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="contacts" className="form-label">
                    Emergency contact Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    name="emergencyLastName"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Emergency contact Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="emergencyEmail"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="contacts-phone" className="form-label">
                    Emergency contact phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="contacts-phone"
                    name="emergencyPhone"
                    placeholder="xxx-xxx-xxxx"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Emergency contact Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact-address"
                    name="emergencyAddress"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="Select" className="form-label">
                    Approval status
                  </label>
                  <select id="Select" className="form-select" name="approval">
                    <option>Pending</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export async function loader({ request, params }) {
  const token = tokenLoader();

  const response = await fetch("http://localhost:3001/opportunities", {
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
  const data = await request.formData();

  const token = tokenLoader();

  const info = {
    Email: data.get("email"),
    Fname: data.get("firstName"),
    Lname: data.get("lastName"),
    Username: data.get("userName"),
    Password: data.get("password"),
    Opportunity: data.get("opp"),
    Skills: data.get("skills"),
    Time: data.get("dayTime"),
    Address: data.get("address"),
    Phone: data.get("phone"),
    Education: data.get("education"),
    Licenses: data.get("licenses"),

    EmergencyFirstName: data.get("emergencyFirstName"),
    EmergencyLastName: data.get("emergencyLastName"),
    EmergencyEmail: data.get("emergencyEmail"),
    EmergencyPhone: data.get("emergencyPhone"),
    EmergencyAddress: data.get("emergencyAddress"),
    ApprovalStatus: data.get("approval"),
  };

  const response = await fetch("http://localhost:3001/volunteer/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(info),
  });

  if (response.ok) {
    return redirect("/admin/managevolunteers");
  }
}
