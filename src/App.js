import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Error from "./pages/Error";
import History from "./pages/History";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RestaurantReview from "./pages/RestaurantReview";
import Review from "./pages/Review";
import RootLayout from "./pages/RootLayout";
import { SearchResult } from "./pages/SearchResult";
import UserProfile from "./pages/UserProfile";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <Error />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/login", element: <Login /> },
//       { path: "/reviews", element: <Review /> },
//       { path: "/register", element: <Register /> },
//       { path: "/history", element: <History /> },
//       { path: "/review/:id", element: <RestaurantReview /> },
//       { path: "/profile/:id", element: <UserProfile /> },
//       { path: "/search", element: <SearchResult /> },
//     ],
//   },
// ]);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return null;
};
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/register" element={<Register />} />
          <Route path="/history" element={<History />} />
          <Route path="/review/:id" element={<RestaurantReview />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/search" element={<SearchResult />} />
        </Route>
        <Route element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
