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
    path: "/pet-project-Star-Wars/",
    exact: true,
    element: <HomePage />,
  },
  {
    path: "/pet-project-Star-Wars/people",
    exact: true,
    element: <PeoplePage />,
  },
  {
    path: "/pet-project-Star-Wars/search",
    exact: true,
    element: <SearchPage />,
  },
  {
    path: "/pet-project-Star-Wars/favorites",
    exact: true,
    element: <FavoritesPage />,
  },
  {
    path: "/pet-project-Star-Wars/people/:id",
    element: <PersonPage />,
  },
  {
    path: "/pet-project-Star-Wars/not-found",
    exact: true,
    element: <NotFoundPage />,
  },
  {
    path: "/pet-project-Star-Wars/fail",
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
