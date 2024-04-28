import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import HomePage from "../Pages/Home/HomePage.tsx";
import Dashboard from "../Pages/Dashboard/Dashboard.tsx";
import CreateDonation from "../Pages/CreateDonation/CreateDonation.tsx";
import Login from "../Pages/Login/Login.tsx";
import Register from "../Pages/Register/Register.tsx";
import AllDonationPage from "../Pages/AllDonationPage/AllDonationPage.tsx";
import AllDonations from "../Pages/AllDonations/AllDonations.tsx";
import DonationDetails from "../Pages/DonationDetails/DonationDetails.tsx";
import ProtectedRoutes from "../Layouts/ProtectedRoutes.tsx";
import PieChart from "../Components/PieChart/PieChart.tsx";
import LeaderBoardPage from "../Pages/LeaderBoardPage/LeaderBoardPage.tsx";
import PostTestimonial from "../Pages/PostTestimonial/PostTestimonial.tsx";
import CreateCommunity from "../Components/CreateCommunity/CreateCommunity.tsx";
import BeVolunteer from "../Pages/BeVolunteer/BeVolunteer.tsx";
import AboutPage from "../Pages/AboutPage/AboutPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/donations",
        element: <AllDonations />,
      },
      {
        path: "/donation/:id",
        element: <DonationDetails />,
      },
      {
        path: "/leaderboard",
        element: <LeaderBoardPage />,
      },
      {
        path: "/community",
        element: <CreateCommunity />,
      },
      {
        path: "/volunteer",
        element: (
          <ProtectedRoutes>
            <BeVolunteer />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/aboutus",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoutes>
        <Dashboard />
      </ProtectedRoutes>
    ),
    children: [
      {
        index: true,
        element: (
          <ProtectedRoutes>
            <PieChart />
          </ProtectedRoutes>
        ),
      },
      {
        path: "create-donation",
        element: (
          <ProtectedRoutes>
            <CreateDonation />
          </ProtectedRoutes>
        ),
      },
      {
        path: "all-donations",
        element: (
          <ProtectedRoutes>
            <AllDonationPage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "create-testimonial",
        element: (
          <ProtectedRoutes>
            <PostTestimonial />
          </ProtectedRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
