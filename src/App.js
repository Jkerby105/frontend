import {Loginform, action as actionSub} from './page/Loginform.jsx';
import {Adminpage} from './page/Adminpage.jsx'
import ErrorPage from './page/Error'
import RootLayout from './page/root';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Managevolunteers,loader as volunteerLoader, action as volunteerAction } from './page/Managevolunteers.jsx';
import Addvolunteer from './page/AddVolunteer.jsx';
import Editvolunteer from './page/Editvolunteer.jsx';
import Manageopportunities from './page/Manageopportunities.jsx';
import AddOpportunity from './page/AddOpportunity.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

     const router = createBrowserRouter([
      { path: '/' ,
      element: <RootLayout />,
      errorElement: <ErrorPage/>, 
      children: [

        { index: true, element: <Loginform />, action: actionSub},
        {path:'/admin' ,element: <Adminpage/>},
        {path: '/admin/managevolunteers', element: <Managevolunteers/>,
        action: volunteerAction, loader:volunteerLoader},
        {path: '/admin/managevolunteers/add', element: <Addvolunteer/>},
        {path: '/admin/managevolunteers/edit', element: <Editvolunteer/>},
        {path: '/admin/manageopportunities', element: <Manageopportunities/>},
        {path: '/admin/manageopportunities/add', element:<AddOpportunity/>},


      ]},
     


     ]);

  return (
        <RouterProvider router={router}></RouterProvider>

  );
}

export default App;
