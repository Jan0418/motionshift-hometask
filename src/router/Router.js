import { createBrowserRouter } from "react-router-dom";

import Collections from "../pages/Collections";
import Favourites from "../pages/Favourites";

const Router = createBrowserRouter([
  {
    path: "*",
    element: <Collections />,
  },
  {
    path: "/favourites",
    element: <Favourites />,
  },
]);

export default Router;
