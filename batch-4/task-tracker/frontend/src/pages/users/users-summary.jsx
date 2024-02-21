import { CiCirclePlus } from 'react-icons/ci';
import SummaryCard from '../../components/summary-card';
import { useState } from 'react';
import { toast } from 'react-toastify';
import CreateUserModal from './create-user-modal';
import { createUser } from '../../services/user-services';

const UsersSummary = ({ userSummary, fetchAllUsers }) => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({});

  const handleShow = () => setShowModal(true);

  const handleClose = () => {
    setUser({});
    setShowModal(false)
  };

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setUser(preValue => ({
      ...preValue,
      [name]: value,
    }));
  }

  const handleCreateUser = () => {
    createUser(user)
      .then(() => {
        toast.success('User successfully created!');
        handleClose();
        fetchAllUsers();
      })
      .catch(() => {
        toast.error('Something went wrong!')
      });
  };

  return (
    <div className='user-summary-card-container'>
      <div
        className='rounded py-2 px-3 shadow d-flex justify-content-center align-items-center cursor-pointer'
        style={{ fontSize: '25px', backgroundColor: 'lightgray' }}
        onClick={handleShow}
      >
        <CiCirclePlus />
        <span className='ms-2'>Create User</span>
      </div>
      <SummaryCard name='Total Admins' count={userSummary.admins} color={1} />
      <SummaryCard name='Total Managers' count={userSummary.managers} color={2} />
      <SummaryCard name='Total Executives' count={userSummary.executives} color={3} />
      <SummaryCard name='Total Users' count={userSummary.totalUsers} color={4} />

      <CreateUserModal
        showModal={showModal}
        handleClose={handleClose}
        handleValueChange={handleValueChange}
        handleCreateUser={handleCreateUser}
      />
    </div>
  );
};

export default UsersSummary;