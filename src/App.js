import {Loginform, action as actionSub} from './page/Loginform.jsx';
import {Adminpage} from './page/Adminpage.jsx'
import ErrorPage from './page/Error'
import RootLayout from './page/root';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Managevolunteers, getVolunteer } from './page/Managevolunteers.jsx';
import Addvolunteer from './page/AddVolunteer.jsx';

function App() {

     const router = createBrowserRouter([
      { path: '/' ,
      element: <RootLayout />,
      errorElement: <ErrorPage/>, 
      children: [

        { index: true, element: <Loginform />, action: actionSub},
        {path:'/admin' ,element: <Adminpage/>},
        {path: '/admin/managevolunteers', element: <Managevolunteers/>, loader: getVolunteer },
        {path: '/admin/managevolunteers/add', element: <Addvolunteer/>},

      ]},
     


     ]);

  return (
        <RouterProvider router={router}></RouterProvider>

  );
}

export default App;
