import TemplateForm from './components/templates/TemplateForm';
import Home from './components/pages/Home';
import Demo from './components/pages/Demo';
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
        path: '/demo',
        exact: true,
        component: Demo,
        getInitialData: (path = '') => fetchTemplateData('demo')
    },
    {
        path: '/template/:name',
        exact: true,
        component: TemplateForm,
        getInitialData: (path = '') => fetchTemplateData(path.split('/').pop())
    }
];

export default routes;
