import LoginComp from "../components/loginComp";
import {redirect} from "react-router-dom";

export function Loginform() {
  return <LoginComp />;
}

export async function action({ request, params }) {
  const data = await request.formData();

  const val = {
    user: "Admin",
    password: "Rally99",
  };

  const response = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(val),
  });

  const d = await response.json();
  if (d.Status === "Success") {
    localStorage.setItem("token", d.authToken);
    return redirect("/admin");
  } else {
    alert(d.Message);
    return redirect("/");
  }
}
