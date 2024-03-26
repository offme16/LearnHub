import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { PageNotFound } from 'pages/PageNotFound';
import { TaskPage } from 'pages/TasksPage';

export enum AppRoutes {
    MAIN = 'main',
    TASKS ='tasks',
    // must be last
    PAGE_NOT_FOUND = 'page_not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.TASKS]: '/tasks/:id',
    // must be last
    [AppRoutes.PAGE_NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,

    },
    [AppRoutes.TASKS]: {
        path: RoutePath.tasks,
        element: <TaskPage />,
    },
    // must be last
    [AppRoutes.PAGE_NOT_FOUND]: {
        path: RoutePath.page_not_found,
        element: <PageNotFound />,
    },
};