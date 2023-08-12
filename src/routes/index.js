import About from '~/pages/About';
import Home from '~/pages/Home';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }