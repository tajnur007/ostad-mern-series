import Table from 'react-bootstrap/Table';

const TasksTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Assignee</th>
          <th>Priority</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Static Title</td>
          <td>Static description</td>
          <td>Static User</td>
          <td>Urgent</td>
          <td>On Going</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TasksTable;