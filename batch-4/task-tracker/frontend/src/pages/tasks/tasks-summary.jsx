import { CiCirclePlus } from 'react-icons/ci';
import SummaryCard from '../../components/summary-card';

const TasksSummary = () => {
  return (
    <div className='summary-card-container'>
      <div className='rounded py-2 px-3 shadow d-flex justify-content-center align-items-center cursor-pointer' style={{ fontSize: '25px', backgroundColor: 'lightgray' }}>
        <CiCirclePlus />
        <span className='ms-2'>Create Task</span>
      </div>
      <SummaryCard name='Pending Tasks' count={0} color={2} />
      <SummaryCard name='On Going Tasks' count={0} color={3} />
      <SummaryCard name='Completed Tasks' count={0} color={4} />
    </div>
  );
};

export default TasksSummary;