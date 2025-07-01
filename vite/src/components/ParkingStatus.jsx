const ParkingStatus = ({ occupied, total }) => {
    return (
      <div className="parking-status">
        <h3>Status do Estacionamento</h3>
        <p>Vagas: {occupied}/{total}</p>
      </div>
    );
  };
  
  export default ParkingStatus;