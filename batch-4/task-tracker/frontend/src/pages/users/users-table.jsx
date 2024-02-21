import Table from 'react-bootstrap/Table';
import { LuClipboardEdit } from 'react-icons/lu';
import { MdDelete } from 'react-icons/md';

const UsersTable = ({ allUsers }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Email</th>
          <th>Mobile</th>
          <th className='text-center'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {allUsers?.map(user => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.role}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td className='text-center'>
              <LuClipboardEdit className='text-success cursor-pointer' />
              <MdDelete className='text-danger cursor-pointer ms-2' />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UsersTable;