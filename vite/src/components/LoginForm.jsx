import { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: ''
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
    // Lógica de login aqui
    console.log('Dados de login:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h3>Já da casa? faça o login</h3>
      <div className="form-group">
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="SENAI"
          required
        />
      </div>
      <div className="form-group">
        <label>CPF:</label>
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          placeholder="123.456.789-10"
          required
        />
      </div>
      <button type="submit" className="submit-button">LOGAR</button>
    </form>
  );
};

export default LoginForm;