import About from '~/pages/About';
import Home from '~/pages/Home';
import Policy from '~/pages/Policy';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/policy', component: Policy }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }