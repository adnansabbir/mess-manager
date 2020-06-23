export const APP_ROUTES = {
    AUTH: '/auth',
    LANDING_PAGE: '/',
    AUTHENTICATED_PAGE: '/my-account'
};

export const AUTH_ROUTES = {
    SIGN_IN: `${APP_ROUTES.AUTH}/login`,
    SIGN_UP: `${APP_ROUTES.AUTH}/register`,
};