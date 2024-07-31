import Home from '../pages/Home';
import Profile from '../pages/Profile';
import News from '../pages/News';
import Finance from '../pages/Finance';
import RegisterStudy from '../pages/RegisterStudy';
import Schedule from '../pages/Schedule';
import StudySpace from '../pages/StudySpace';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/tintuc', component: News },
    { path: '/taichinh', component: Finance },
    { path: '/dangky_hoctap', component: RegisterStudy },
    { path: '/thoikhoabieu', component: Schedule },
    { path: '/gochoctap', component: StudySpace },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
