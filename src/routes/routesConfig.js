import {PeoplePage, HomePage, NotFoundPage} from "@react_redux_course/pages";

const routesConfig = [
    {
        path: '/',
        exact: true,
        element: <HomePage/>
    },
    {
        path: '/people',
        exact: true,
        element: <PeoplePage/>
    },
    {
        path: '/not-found',
        exact: true,
        element: <NotFoundPage/>
    },
    {
        path: '*',
        exact: false,
        element: <NotFoundPage/>
    }
]

export default routesConfig;