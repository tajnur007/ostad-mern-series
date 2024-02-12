import { useEffect, useState } from 'react';
import { PAGE_ROUTES, STORAGE_KEYS } from '../../utils/constants/common-constants';
import { useNavigate } from 'react-router-dom';
import FullPageLoader from '../full-page-loader';

const AuthLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const localStorageToken = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    const authToken = localStorageToken ? JSON.parse(localStorageToken) : null;

    if (authToken) {
      navigate(PAGE_ROUTES.HOME);
    }

    setIsLoading(false);
  });

  if (isLoading) {
    return <FullPageLoader />;
  }

  return (
    <div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
      <div className='border px-5 py-3 rounded shadow'>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
