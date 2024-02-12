import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home.jsx';
import AboutPage from './pages/about.jsx';
import SignupPage from './pages/auth/signup.jsx';
import LoginPage from './pages/auth/login.jsx';
import ForgetPasswordPage from './pages/auth/forget-password.jsx';
import TasksPage from './pages/tasks.jsx';
import UsersPage from './pages/users.jsx';
import { PAGE_ROUTES } from './utils/constants/common-constants.js';

export const router = createBrowserRouter([
  {
    path: PAGE_ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: PAGE_ROUTES.TASKS,
    element: <TasksPage />,
  },
  {
    path: PAGE_ROUTES.USERS,
    element: <UsersPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: PAGE_ROUTES.SIGNUP,
    element: <SignupPage />,
  },
  {
    path: PAGE_ROUTES.LOGIN,
    element: <LoginPage />,
  },
  {
    path: PAGE_ROUTES.FORGET_PASSWORD,
    element: <ForgetPasswordPage />,
  },
]);
