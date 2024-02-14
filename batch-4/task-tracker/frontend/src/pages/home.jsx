import AuthorizedLayout from '../components/layouts/authorized-layout';
import SummaryCard from '../components/summary-card';


const HomePage = () => {
  return (
    <AuthorizedLayout>
      <div className='summary-card-container'>
        <SummaryCard name='Pending Task' count={0} color={1} />
        <SummaryCard name='On Going Task' count={0} color={2} />
        <SummaryCard name='Completed Task' count={0} color={3} />
        <SummaryCard name='Total User' count={0} color={4} />
      </div>
    </AuthorizedLayout>
  );
};

export default HomePage;