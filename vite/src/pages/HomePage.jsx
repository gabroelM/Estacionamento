import Header from '../components/header';
import ParkingStatus from '../components/ParkingStatus';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <h1>Bem vindo ao Sistema!!</h1>
        <ParkingStatus occupied={30} total={30} />
      </main>
    </div>
  );
};

export default HomePage;