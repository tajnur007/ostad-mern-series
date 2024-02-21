
import AuthorizedLayout from '../../components/layouts/authorized-layout';
import UsersTable from './users-table';
import UsersSummary from './users-summary';
import { Fragment, useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { getAllUsers } from '../../services/user-services';
import { USER_ROLES } from '../../utils/constants/user-constants';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FiSearch } from "react-icons/fi";


const UsersPage = () => {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const [userSummary, setUserSummary] = useState({
    admins: 0,
    managers: 0,
    executives: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    getAllUsers()
      .then(resp => {
        const data = resp.data.data;
        setAllUsers(data);

        let admins = 0, managers = 0, executives = 0, totalUsers = data.length;

        data.forEach(user => {
          if (user.role === USER_ROLES.ADMIN) admins++;
          else if (user.role === USER_ROLES.MANAGER) managers++;
          else if (user.role === USER_ROLES.EXECUTIVE) executives++;
        });

        setUserSummary({ admins, managers, executives, totalUsers });
      }).finally(() => {
        setIsDataLoading(false);
      });
  };

  return (
    <AuthorizedLayout>
      <UsersSummary userSummary={userSummary} fetchAllUsers={fetchAllUsers} />
      {isDataLoading ? (
        <div className='d-flex justify-content-center'>
          <Spinner animation='border' variant='primary' />
        </div>
      ) : (
        <Fragment>
          <InputGroup className="mb-3 w-25 ms-auto">
            <Form.Control placeholder="name or email" />
            <InputGroup.Text id="basic-addon1">
              <FiSearch />
            </InputGroup.Text>
          </InputGroup>
          <UsersTable allUsers={allUsers} />
        </Fragment>
      )}
    </AuthorizedLayout>
  );
};

export default UsersPage;