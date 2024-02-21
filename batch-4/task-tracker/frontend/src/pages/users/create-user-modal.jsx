import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { TASK_PRIORITY, TASK_STATUS } from '../../utils/constants/task-constants';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../services/user-services';

const CreateUserModal = ({
  showModal,
  handleClose,
  handleValueChange,
  handleCreateUser,
}) => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   getAllUsers()
  //     .then(resp => {
  //       let respUsers = resp.data.data;

  //       respUsers = respUsers.filter(user => user.role === 'executive');
  //       respUsers = respUsers.map(user => {
  //         return ({
  //           value: user.email,
  //           name: user.name,
  //         });
  //       });

  //       setUsers(respUsers);
  //     });
  // }, []);

  return (
    <Modal centered show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='mb-3'>
          <Form.Label htmlFor='userName'>
            Name <span className='text-danger'>*</span>
          </Form.Label>
          <Form.Control name='name' id='userName' onChange={handleValueChange} />
        </div>
        <div className='mb-3'>
          <Form.Label htmlFor='userEmail'>
            Email <span className='text-danger'>*</span>
          </Form.Label>
          <Form.Control name='email' type='email' id='userEmail' onChange={handleValueChange} />
        </div>
        <div className='mb-3'>
          <Form.Label htmlFor='userPassword'>
            Password <span className='text-danger'>*</span>
          </Form.Label>
          <Form.Control name='password' type='password' id='userPassword' onChange={handleValueChange} />
        </div>
        <div className='mb-3'>
          <Form.Label htmlFor='userAddress'>
            Address
          </Form.Label>
          <Form.Control name='address' id='userAddress' onChange={handleValueChange} />
        </div>
        <div className='mb-3'>
          <Form.Label htmlFor='userPhone'>
            Phone
          </Form.Label>
          <Form.Control name='phone' id='userPhone' onChange={handleValueChange} />
        </div>
        <div className='mb-3'>
          <Form.Label htmlFor='userAge'>
            Age
          </Form.Label>
          <Form.Control name='age' type='number' id='userAge' onChange={handleValueChange} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCreateUser}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateUserModal;