import { React } from "react";
import ManageVolComp from "../components/ManageVolComp";
import {redirect, useLoaderData } from "react-router-dom";
import { tokenLoader } from "../util/authentication";

export function Managevolunteers() {
  const holdData = useLoaderData();

  return <ManageVolComp value={holdData} />;
}

export async function loader() {
  const token = tokenLoader();

  const response = await fetch("http://localhost:3001/volunteer", {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  const data = await response.json();

  if (data.Error) {
    return redirect("/");
  }

  return data;
}

export async function action({ request, params }) {
  const val = await request.formData();
  const cc = val.get("val");

  const token = tokenLoader();

  const response = await fetch("http://localhost:3001/volunteer/" + cc, {
    method: "Delete",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  if (response.ok) {
    return redirect("/admin/managevolunteers");
  }
}
