import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import AuthLayout from '../../components/layouts/auth-layout';
import { useState } from 'react';
import { createUser } from '../../services/auth-services';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PAGE_ROUTES } from '../../utils/constants/common-constants';

const SignupPage = () => {
  const [isUserCreating, setIsUserCreating] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();

    if (userInfo.password !== userInfo.confPassword) {
      toast.warning('Your password and confirm password does not matched!');
    } else {
      const userPayload = {
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
        address: userInfo.address,
        phone: userInfo.phone,
        age: userInfo.age,
      };

      setIsUserCreating(true);
      createUser(userPayload)
        .then(resp => {
          setIsUserCreating(false);
          toast.success('Successfully account created.');
          navigate(PAGE_ROUTES.LOGIN);
        })
        .catch(e => {
          setIsUserCreating(false);
          toast.error('Your account creation request cannot be proceed at this moment');
        });
    }
  };

  return (
    <AuthLayout>
      <Form onSubmit={handleCreateAccount}>
        <h2 className='text-center mb-3'>Create Account</h2>
        <InputGroup className='mb-3' style={{ width: '500px' }}>
          <InputGroup.Text style={{ width: '157px' }}>Name</InputGroup.Text>
          <Form.Control onChange={onInputChange} name='name' placeholder='e.g. Sabibur Rahman' required />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text style={{ width: '157px' }}>Email</InputGroup.Text>
          <Form.Control onChange={onInputChange} name='email' placeholder='e.g. sabibur@gmail.com' type='email' required />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text style={{ width: '157px' }}>Address</InputGroup.Text>
          <Form.Control onChange={onInputChange} name='address' placeholder='e.g. Dhaka, Bangladesh' />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text style={{ width: '157px' }}>Phone</InputGroup.Text>
          <Form.Control onChange={onInputChange} name='phone' placeholder='e.g. 01711-223344' />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text style={{ width: '157px' }}>Age</InputGroup.Text>
          <Form.Control onChange={onInputChange} name='age' placeholder='e.g. 28' />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text style={{ width: '157px' }}>Password</InputGroup.Text>
          <Form.Control onChange={onInputChange} name='password' required />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text style={{ width: '157px' }}>Confirm Password</InputGroup.Text>
          <Form.Control onChange={onInputChange} name='confPassword' required />
        </InputGroup>
        <div className='d-flex justify-content-center'>
          <Button variant='primary' className='mb-3 px-5' type='submit' disabled={isUserCreating}>
            Create
            {isUserCreating && <Spinner className='ms-2' animation="border" size="sm" />}
          </Button>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default SignupPage;