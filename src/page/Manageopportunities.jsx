/* components for other option */
import { redirect, useLoaderData } from "react-router-dom";

import ManageOppCom from "../components/ManageOppComp";
import SearchAndFilterOpp from "../components/SearchAndFilterOpp";
import { tokenLoader } from "../util/authentication";

export function Manageopportunities() {
  const data = useLoaderData();

  return (
    <>
      <SearchAndFilterOpp />
      <ManageOppCom value={data} />
    </>
  );
}

export async function loader() {
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
  const val = await request.formData();
  const cc = val.get("val");

  const token = tokenLoader();

  const response = await fetch("http://localhost:3001/opportunities/" + cc, {
    method: "Delete",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  if (response.ok) {
    return redirect("/admin/manageopportunities");
  }
}
