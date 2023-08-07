import {Loginform, action as actionSub} from './page/Loginform.jsx';
import {Adminpage} from './page/Adminpage.jsx'
import ErrorPage from './page/Error'
import RootLayout from './page/root';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Managevolunteers } from './page/Managevolunteers.jsx';
import Addvolunteer from './page/AddVolunteer.jsx';
import Editvolunteer from './page/Editvolunteer.jsx';

function App() {

     const router = createBrowserRouter([
      { path: '/' ,
      element: <RootLayout />,
      errorElement: <ErrorPage/>, 
      children: [

        { index: true, element: <Loginform />, action: actionSub},
        {path:'/admin' ,element: <Adminpage/>},
        {path: '/admin/managevolunteers', element: <Managevolunteers/>},
        {path: '/admin/managevolunteers/add', element: <Addvolunteer/>},
        {path: '/admin/managevolunteers/edit', element: <Editvolunteer/>},

      ]},
     


     ]);

  return (
        <RouterProvider router={router}></RouterProvider>

  );
}

export default App;
