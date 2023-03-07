import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import History from "./pages/History";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RestaurantReview from "./pages/RestaurantReview";
import Review from "./pages/Review";
import RootLayout from "./pages/RootLayout";
import UserProfile from "./pages/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home/>},
      { path: '/login', element: <Login/>},
      { path: '/reviews', element: <Review/>},
      { path: '/register', element: <Register/>},
      { path: '/history', element: <History/>},
      { path: '/review/:id', element: <RestaurantReview/>},
      { path: '/profile', element: <UserProfile/>},
    ]
  }
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
