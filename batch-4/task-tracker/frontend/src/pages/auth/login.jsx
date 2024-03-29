import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import AuthLayout from '../../components/layouts/auth-layout';
import { login } from '../../services/auth-services';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { PAGE_ROUTES, STORAGE_KEYS } from '../../utils/constants/common-constants';
import { useNavigate } from 'react-router-dom';
import taskTrackerIcon from '../../assets/images/tt-icon.svg';

const LoginPage = () => {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const payload = {
      email: userInfo.email,
      password: userInfo.password,
    };

    login(payload)
      .then(resp => {
        const { auth_token, ...userData } = resp.data.data;
        localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, JSON.stringify(auth_token));
        localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
        toast.success('Successfully logged in!');
        navigate(PAGE_ROUTES.HOME);
      })
      .catch(e => {
        toast.error('Invalid credentials!');
      });
  };

  return (
    <AuthLayout>
      <Form onSubmit={handleLogin}>
        <h1 className='text-center mb-3' style={{ color: '#22C67F' }}>
          <img src={taskTrackerIcon} className='me-2' style={{ width: '40px' }} />
          Task Tracker
        </h1>
        <h2 className='text-center mb-3'>Hello, Welcome Back!</h2>
        <InputGroup className='mb-3'>
          <InputGroup.Text style={{ width: '100px' }}>Email</InputGroup.Text>
          <Form.Control onChange={onInputChange} name='email' type='email' required />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text style={{ width: '100px' }}>Password</InputGroup.Text>
          <Form.Control onChange={onInputChange} name='password' required />
        </InputGroup>
        <div className='d-flex justify-content-center'>
          <Button variant='primary' className='mb-3 px-5' type='submit'>
            Login
          </Button>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default LoginPage;