import Header from '../components/header';
import LoginForm from '../components/LoginForm';
import ParkingStatus from '../components/ParkingStatus';

const LoginPage = () => {
  return (
    <div className="login-page">
      <Header />
      <main className="login-container">
        <LoginForm />
        <ParkingStatus occupied={15} total={30} />
      </main>
    </div>
  );
};

export default LoginPage;