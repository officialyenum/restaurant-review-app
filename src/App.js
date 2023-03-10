import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
function App() {
  return (
    <Router>
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
