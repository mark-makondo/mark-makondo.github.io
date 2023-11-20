import ROUTES from './registry';
class Navigation {
    get AvailableRoutes() {
        return ROUTES;
    }
    get SignedRoutes() {
        return Object.values(ROUTES).filter((r) => r.isAuthenticated);
    }
    get UnsignedRoutes() {
        return Object.values(ROUTES).filter((r) => !r.isAuthenticated && !r.disabled);
    }
    get SidebarRoutes() {
        return Object.values(ROUTES).filter((r) => !r.excludeFromSidebar);
    }
    get DefaultSignedRoute() {
        return this.SignedRoutes.find((r) => r.default);
    }
    get DefaultUnsignedRoute() {
        return this.UnsignedRoutes.find((r) => r.default);
    }
    /**
     * @param {String} path
     * @returns {Object}
     */
    routeDataByPath(path) {
        return Object.values(ROUTES).find((route) => route.path == path);
    }
}
export default new Navigation();
