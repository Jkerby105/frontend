import {Loginform, action as actionSub} from './page/Loginform.jsx';
import ErrorPage from './page/Error'
import RootLayout from './page/root';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {

     const router = createBrowserRouter([
      { path: '/' ,
      element: <RootLayout />,
      errorElement: <ErrorPage/>, 
      children: [
        { index: true, element: <Loginform />, action: actionSub},
        {path:'/admin' ,element: <></>}
      ]}
     ]);

  return (
        <RouterProvider router={router}></RouterProvider>

  );
}

export default App;
