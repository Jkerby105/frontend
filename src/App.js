import { Loginform, action as actionSub } from "./page/Loginform.jsx";
import { Adminpage } from "./page/Adminpage.jsx";
import ErrorPage from "./page/Error";
import RootLayout from "./page/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Managevolunteers,
  loader as volunteerLoader,
  action as volunteerAction,
} from "./page/Managevolunteers.jsx";
import {
  Addvolunteer,
  loader as volunteerAddLoader,
  action as volunteerAddAction,
} from "./page/AddVolunteer.jsx";
import {
  EditVolunteer,
  action as EditVolunteerAction,
  loader as EditVolunteerLoader,
} from "./page/Edit/EditVolunteer.jsx";
import {
  EditEmergency,
  action as EditEmergencyAction,
  loader as EditEmergencyLoader,
} from "./page/Edit/EditEmergency.jsx";
import {
  Manageopportunities,
  loader as opportunityLoader,
  action as opportunityAction,
} from "./page/Manageopportunities.jsx";
import {
  AddOpportunity,
  action as opportunityCreateAction,
} from "./page/AddOpportunity.jsx";
import {
  EditOpportunity,
  action as opportunityUpdateAction,
  loader as opportunityUpdateLoader,
} from "./page/Edit/EditOpportunity.jsx";
import { useState } from "react";

function App() {
  const [login, setLoging] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      // element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Loginform />, action: actionSub },
        {
          path: "/admin",
          element: <RootLayout />,
          children: [
            { index: true, element: <Adminpage /> },
            {
              path: "/admin/managevolunteers",
              element: <Managevolunteers />,
              action: volunteerAction,
              loader: volunteerLoader,
            },
            {
              path: "/admin/managevolunteers/add",
              element: <Addvolunteer />,
              action: volunteerAddAction,
              loader: volunteerAddLoader,
            },
            {
              path: "/admin/managevolunteers/editVolunteer/:id",
              element: <EditVolunteer />,
              action: EditVolunteerAction,
              loader: EditVolunteerLoader,
            },
            {
              path: "/admin/managevolunteers/editContact/:id",
              element: <EditEmergency />,
              action: EditEmergencyAction,
              loader: EditEmergencyLoader,
            },
            {
              path: "/admin/manageopportunities",
              element: <Manageopportunities />,
              action: opportunityAction,
              loader: opportunityLoader,
            },
            {
              path: "/admin/manageopportunities/add",
              element: <AddOpportunity />,
              action: opportunityCreateAction,
            },
            {
              path: "/admin/manageopportunities/edit/:id",
              element: <EditOpportunity />,
              action: opportunityUpdateAction,
              loader: opportunityUpdateLoader,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div>{login && <RouterProvider router={router}></RouterProvider>}</div>
  );
}

export default App;
