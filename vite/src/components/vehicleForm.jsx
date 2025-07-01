import { useState } from 'react';

const VehicleForm = () => {
  const [formData, setFormData] = useState({
    modelo: '',
    marca: '',
    cor: '',
    placa: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de cadastro de veículo aqui
    console.log('Dados do veículo:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="vehicle-form">
      <h3>Cadastro de Veículo</h3>
      <div className="form-group">
        <label>Marca:</label>
        <input
          type="text"
          name="marca"
          value={formData.marca}
          onChange={handleChange}
          placeholder="BMW"
          required
        />
      </div>
      <div className="form-group">
        <label>Modelo:</label>
        <input
          type="text"
          name="modelo"
          value={formData.modelo}
          onChange={handleChange}
          placeholder="320i m sports"
          required
        />
      </div>
      <div className="form-group">
        <label>Cor:</label>
        <input
          type="text"
          name="cor"
          value={formData.cor}
          onChange={handleChange}
          placeholder="Preto"
          required
        />
      </div>
      <div className="form-group">
        <label>Placa:</label>
        <input
          type="text"
          name="placa"
          value={formData.placa}
          onChange={handleChange}
          placeholder="1ASX3F80SA"
          required
        />
      </div>
      <button type="submit" className="submit-button">Cadastrar Veículo</button>
    </form>
  );
};

export default VehicleForm;