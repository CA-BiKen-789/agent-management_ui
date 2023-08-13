import About from '~/pages/About';
import Discount from '~/pages/Discount';
import Home from '~/pages/Home';
import Information from '~/pages/Information';
import Policy from '~/pages/Policy';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/policy', component: Policy },
    { path: '/discount', component: Discount },
    { path: '/information', component: Information }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }