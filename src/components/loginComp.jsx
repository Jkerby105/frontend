import { React } from "react";
import "./loginComp.css";
import { Form } from "react-router-dom";

function loginComp() {
  return (
    <div className="App">
      <div className="loginform">
        <Form method="post" className="logincredentials">
          <label htmlFor="username">
            <b>Username:</b>{" "}
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
          ></input>
          <label htmlFor="password">
            {" "}
            <b>Password:</b>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            required
          ></input>
          <button id="log-in-buttton">Log in </button>
        </Form>
      </div>
    </div>
  );
}

export default loginComp;
