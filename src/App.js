import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayOut from "./layout/layout/RootLayout/RootLayout";
import HomePage from "./features/Home/HomePage";
import SearchPage from "./features/Search/SearchPage";
import TripPage from "./features/Trip/TripPage";
import AddTripPage from "./features/AddTrip/AddTripPage";
import MemberPage from "./features/Member/MemberPage";
import ErrorPage from "./layout/layout/ErrorPage/ErrorPage";
import Index from "./features/Search/pages/index";
import Detail from "./features/Search/pages/detail/detail";

const router = createBrowserRouter([
  {
    path: "Triplaner",
    element: <RootLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "search",
        element: <SearchPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: ":target/:id",
            element: <Detail />,
          },
        ],
      },
      {
        path: "trip",
        element: <TripPage />,
      },
      {
        path: "addTrip",
        element: <AddTripPage />,
      },
      {
        path: "member",
        element: <MemberPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
