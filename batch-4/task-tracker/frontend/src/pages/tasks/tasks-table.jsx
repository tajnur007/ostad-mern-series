import Table from 'react-bootstrap/Table';

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
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TasksTable;