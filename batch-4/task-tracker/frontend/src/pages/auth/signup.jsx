import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const SignupPage = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
      <Form className='border px-5 py-3 rounded shadow'>
        <h2 className='text-center mb-3'>Create Account</h2>
        <InputGroup className='mb-3' style={{ width: '500px' }}>
          <InputGroup.Text style={{ width: '157px' }}>Name</InputGroup.Text>
          <Form.Control placeholder='e.g. Sabibur Rahman' required />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text style={{ width: '157px' }}>Email</InputGroup.Text>
          <Form.Control placeholder='e.g. sabibur@gmail.com' type='email' required />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text style={{ width: '157px' }}>Address</InputGroup.Text>
          <Form.Control placeholder='e.g. Dhaka, Bangladesh' />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text style={{ width: '157px' }}>Phone</InputGroup.Text>
          <Form.Control placeholder='e.g. 01711-223344' />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text style={{ width: '157px' }}>Age</InputGroup.Text>
          <Form.Control placeholder='e.g. 28' />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text style={{ width: '157px' }}>Password</InputGroup.Text>
          <Form.Control required />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text style={{ width: '157px' }}>Confirm Password</InputGroup.Text>
          <Form.Control required />
        </InputGroup>
        <div className='d-flex justify-content-center'>
          <Button variant='primary' className='mb-3 px-5' type='submit'>
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignupPage;