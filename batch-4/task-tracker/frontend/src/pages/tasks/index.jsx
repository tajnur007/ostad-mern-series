
import AuthorizedLayout from '../../components/layouts/authorized-layout';
import TasksTable from './tasks-table';
import TasksSummary from './tasks-summary';


const TasksPage = () => {
  return (
    <AuthorizedLayout>
      <TasksSummary />
      <TasksTable />
    </AuthorizedLayout>
  );
};

export default TasksPage;