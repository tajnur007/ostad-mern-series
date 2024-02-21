import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { TASK_PRIORITY, TASK_STATUS } from '../../utils/constants/task-constants';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../services/user-services';

const CreateTaskModal = ({
  showModal,
  handleClose,
  handleValueChange,
  handleCreateTask,
}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then(resp => {
        let respUsers = resp.data.data;

        respUsers = respUsers.filter(user => user.role === 'executive');
        respUsers = respUsers.map(user => {
          return ({
            value: user.email,
            name: user.name,
          });
        });

        setUsers(respUsers);
      });
  }, []);

  return (
    <Modal centered show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='mb-3'>
          <Form.Label htmlFor='taskTitle'>
            Title <span className='text-danger'>*</span>
          </Form.Label>
          <Form.Control name='title' id='taskTitle' onChange={handleValueChange} />
        </div>
        <div className='mb-3'>
          <Form.Label htmlFor='taskAssignee'>
            Assignee <span className='text-danger'>*</span>
          </Form.Label>
          <Form.Select name='assignee' id='taskAssignee' onChange={handleValueChange}>
            {users.map(user => (
              <option key={user.value} value={user.value}>{user.name}</option>
            ))}
          </Form.Select>
        </div>
        <div className='mb-3'>
          <Form.Label htmlFor='taskPriority'>
            Priority <span className='text-danger'>*</span>
          </Form.Label>
          <Form.Select name='priority' id='taskPriority' onChange={handleValueChange}>
            {Object.values(TASK_PRIORITY).map(priority => (
              <option value={priority} key={priority}>{priority}</option>
            ))}
          </Form.Select>
        </div>
        <div className='mb-3'>
          <Form.Label htmlFor='taskStatus'>
            Status <span className='text-danger'>*</span>
          </Form.Label>
          <Form.Select name='status' id='taskStatus' onChange={handleValueChange}>
            {Object.values(TASK_STATUS).map(status => (
              <option value={status} key={status}>{status}</option>
            ))}
          </Form.Select>
        </div>
        <div className='mb-3'>
          <Form.Label htmlFor='taskDescription'>Description</Form.Label>
          <Form.Control name='description' id='taskDescription' as='textarea' onChange={handleValueChange}>
          </Form.Control>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCreateTask}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateTaskModal;