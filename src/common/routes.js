import TemplateForm from './components/TemplateForm';
import Home from './components/Home';
import { fetchTemplateData } from './api';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/home',
        exact: true,
        component: Home
    },
    {
        path: '/template/:name',
        exact: true,
        component: TemplateForm,
        getInitialData: (path = '') => fetchTemplateData(path.split('/').pop())
    }
];

export default routes;
