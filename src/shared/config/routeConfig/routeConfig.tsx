import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { PageNotFound } from 'pages/PageNotFound';
import { TaskPage } from 'pages/TasksPage';
import { Authorization } from 'pages/Authorization';
import { Registration } from 'pages/Registration';
import { Profile } from 'pages/ProfilePage';
import { Vacancy } from 'pages/Vacancy';

export enum AppRoutes {
    MAIN = 'main',
    TASKS ='tasks',
    LOGIN = 'login',
    SIGIN = 'sigin',
    PROFILE = 'profile',
    VACANCY = 'vacancy',
    // must be last
    PAGE_NOT_FOUND = 'page_not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.TASKS]: '/tasks/:id',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.SIGIN]: '/sigin',
    [AppRoutes.PROFILE]: '/profile/:id',
    [AppRoutes.VACANCY]: '/vacancy',
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
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <Authorization />,
    },
    [AppRoutes.SIGIN]: {
        path: RoutePath.sigin,
        element: <Registration />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <Profile />,
    },
    [AppRoutes.VACANCY]: {
        path: RoutePath.vacancy,
        element: <Vacancy />,
    },
    // must be last
    [AppRoutes.PAGE_NOT_FOUND]: {
        path: RoutePath.page_not_found,
        element: <PageNotFound />,
    },
};