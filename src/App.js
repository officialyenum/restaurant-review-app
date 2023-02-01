import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import History from "./pages/History";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout/>,
    errorElement:<Error/>,
    children: [
      { path: '/', element: <Home/>},
      { path: '/history', element: <History/>},
    ]
  }
]);
function App() {
  return  <RouterProvider router={router}/> ;
}

export default App;
