
import AuthorizedLayout from '../../components/layouts/authorized-layout';
import TasksTable from './tasks-table';
import TasksSummary from './tasks-summary';
import { getAllTasks } from '../../services/task-services';
import { useEffect, useState } from 'react';
import { TASK_STATUS } from '../../utils/constants/task-constants';
import Spinner from 'react-bootstrap/Spinner';


const TasksPage = () => {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [allTasks, setAllTasks] = useState([]);
  const [taskSummary, setTaskSummary] = useState({
    pending: 0,
    onGoing: 0,
    completed: 0,
  });

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const fetchAllTasks = () => {
    getAllTasks()
      .then(resp => {
        const data = resp.data.data;
        setAllTasks(data);

        let pending = 0, onGoing = 0, completed = 0;

        data.forEach(task => {
          if (task.status === TASK_STATUS.PENDING) pending++;
          else if (task.status === TASK_STATUS.ON_GOING) onGoing++;
          else if (task.status === TASK_STATUS.COMPLETED) completed++;
        });

        setTaskSummary({ pending, onGoing, completed });
      }).finally(() => {
        setIsDataLoading(false);
      });
  };

  return (
    <AuthorizedLayout>
      <TasksSummary taskSummary={taskSummary} fetchAllTasks={fetchAllTasks} />
      {isDataLoading ? (
        <div className='d-flex justify-content-center'>
          <Spinner animation='border' variant='primary' />
        </div>
      ) : (
        <TasksTable allTasks={allTasks} />
      )}
    </AuthorizedLayout>
  );
};

export default TasksPage;