import {
  PeoplePage,
  HomePage,
  NotFoundPage,
  PersonPage,
  SearchPage,
  FavoritesPage,
} from "@react_redux_course/pages";
import { ErrorMessage } from "@react_redux_course/components";

const routesConfig = [
  {
    path: "/",
    exact: true,
    element: <HomePage />,
  },
  {
    path: "/people",
    exact: true,
    element: <PeoplePage />,
  },
  {
    path: "/search",
    exact: true,
    element: <SearchPage />,
  },
  {
    path: "/favorites",
    exact: true,
    element: <FavoritesPage />,
  },
  {
    path: "/people/:id",
    element: <PersonPage />,
  },
  {
    path: "/not-found",
    exact: true,
    element: <NotFoundPage />,
  },
  {
    path: "/fail",
    exact: true,
    element: <ErrorMessage />,
  },
  {
    path: "*",
    exact: false,
    element: <NotFoundPage />,
  },
];

export default routesConfig;
