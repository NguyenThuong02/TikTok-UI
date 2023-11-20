import routesConfigs from '~/config/routes';

// Layouts
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';

// Public routes
const publicRoutes = [
    { path: routesConfigs.home, component: Home },
    { path: routesConfigs.following, component: Following },
    { path: routesConfigs.profile, component: Profile },
    { path: routesConfigs.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
