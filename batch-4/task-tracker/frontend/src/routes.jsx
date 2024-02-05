import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home.jsx';
import AboutPage from './pages/about.jsx';
import SignupPage from './pages/auth/signup.jsx';
import LoginPage from './pages/auth/login.jsx';
import ForgetPasswordPage from './pages/auth/forget-password.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/auth/signup',
    element: <SignupPage />,
  },
  {
    path: '/auth/login',
    element: <LoginPage />,
  },
  {
    path: '/auth/forget-password',
    element: <ForgetPasswordPage />,
  },
]);
