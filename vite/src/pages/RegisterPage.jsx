import Header from '../components/header';
import RegisterForm from '../components/RegisterForm';
import ParkingStatus from '../components/ParkingStatus';

const RegisterPage = () => {
  return (
    <div className="register-page">
      <Header />
      <main className="register-container">
        <RegisterForm />
        <ParkingStatus occupied={15} total={30} />
      </main>
    </div>
  );
};

export default RegisterPage;