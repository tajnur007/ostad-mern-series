import Table from 'react-bootstrap/Table';
import { LuClipboardEdit } from 'react-icons/lu';
import { MdDelete } from 'react-icons/md';

const TasksTable = ({ allTasks }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Assignee</th>
          <th>Priority</th>
          <th>Status</th>
          <th className='text-center'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {allTasks?.map(task => (
          <tr key={task._id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.assignee}</td>
            <td>{task.priority}</td>
            <td>{task.status}</td>
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

export default TasksTable;