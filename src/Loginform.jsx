import React, { useState } from "react";

export function Loginform() {

    return (
        <div className="loginform">

            <form>
                <label htmlFor='username'><b>Username:</b> </label>
                <input type="text" id="username" placeholder="Enter username"></input>
                <label htmlFor='password'> <b>Password:</b></label>
                <input type="password" id="password" placeholder="Enter Password" required></input>
            </form>
            <button id="log-in-buttton">submit</button>

        </div>

    )
}
