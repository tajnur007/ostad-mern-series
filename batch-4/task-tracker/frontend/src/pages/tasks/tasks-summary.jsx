import { CiCirclePlus } from 'react-icons/ci';
import SummaryCard from '../../components/summary-card';
import { useState } from 'react';
import { createTask } from '../../services/task-services';
import { toast } from 'react-toastify';
import CreateTaskModal from './create-task-modal';

const TasksSummary = ({ taskSummary, fetchAllTasks }) => {
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState({});

  const handleShow = () => setShowModal(true);

  const handleClose = () => {
    setTask({});
    setShowModal(false)
  };

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setTask(preValue => ({
      ...preValue,
      [name]: value,
    }));
  }

  const handleCreateTask = () => {
    createTask(task)
      .then(() => {
        toast.success('Task successfully created!');
        handleClose();
        fetchAllTasks();
      })
      .catch(() => {
        toast.error('Something went wrong!')
      });
  };

  return (
    <div className='summary-card-container'>
      <div
        className='rounded py-2 px-3 shadow d-flex justify-content-center align-items-center cursor-pointer'
        style={{ fontSize: '25px', backgroundColor: 'lightgray' }}
        onClick={handleShow}
      >
        <CiCirclePlus />
        <span className='ms-2'>Create Task</span>
      </div>
      <SummaryCard name='Pending Tasks' count={taskSummary.pending} color={2} />
      <SummaryCard name='On Going Tasks' count={taskSummary.onGoing} color={3} />
      <SummaryCard name='Completed Tasks' count={taskSummary.completed} color={4} />

      <CreateTaskModal
        showModal={showModal}
        handleClose={handleClose}
        handleValueChange={handleValueChange}
        handleCreateTask={handleCreateTask}
      />
    </div>
  );
};

export default TasksSummary;