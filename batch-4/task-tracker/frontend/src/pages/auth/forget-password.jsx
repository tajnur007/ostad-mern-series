import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import AuthLayout from '../../components/layouts/auth-layout';

const ForgetPasswordPage = () => {
  return (
    <AuthLayout>
      <Form>
        <h2 className='text-center mb-3'>Forget Password!</h2>
        <p>We will send you an email with the password reset intstructions.</p>
        <InputGroup className='mb-3'>
          <InputGroup.Text style={{ width: '100px' }}>Email</InputGroup.Text>
          <Form.Control type='email' required />
        </InputGroup>
        <div className='d-flex justify-content-center'>
          <Button variant='primary' className='mb-3 px-5' type='submit'>
            Send Email
          </Button>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default ForgetPasswordPage;