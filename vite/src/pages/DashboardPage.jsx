import Header from '../components/header';
import VehicleForm from '../components/vehicleForm';
import ParkingStatus from '../components/ParkingStatus';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <Header />
      <main className="dashboard-container">
        <VehicleForm />
        <ParkingStatus occupied={15} total={30} />
      </main>
    </div>
  );
};

export default DashboardPage;