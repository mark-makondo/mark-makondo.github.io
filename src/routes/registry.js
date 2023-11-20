import React from 'react';
import Home from '../components/home/Home';
export const UNAUTHENTICATED_ROUTES = {
    HOME: {
        path: '/',
        default: true,
        component: <Home />,
        isAuthenticated: false,
    },
};
export const AUTHENTICATED_ROUTES = {};
export default { ...UNAUTHENTICATED_ROUTES, ...AUTHENTICATED_ROUTES };
