import { Fragment, useEffect, useState } from 'react';
import AppNavbar from '../app-navbar';
import { PAGE_ROUTES, STORAGE_KEYS } from '../../utils/constants/common-constants';
import { useNavigate } from 'react-router-dom';
import FullPageLoader from '../full-page-loader';

const AuthorizedLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const localStorageToken = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    const authToken = localStorageToken ? JSON.parse(localStorageToken) : null;

    if (!authToken) {
      navigate(PAGE_ROUTES.LOGIN);
    }

    setIsLoading(false);
  });

  if (isLoading) {
    return <FullPageLoader />;
  }

  return (
    <Fragment>
      <AppNavbar />
      <div className='container'>
        {children}
      </div>
    </Fragment>
  );
};

export default AuthorizedLayout;
