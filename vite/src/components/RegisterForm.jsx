import { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    tipo_usuario: ''
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
    // Lógica de registro aqui
    console.log('Dados de registro:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h3>Novo aqui? faça o cadastro!</h3>
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
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="senai@senai.com"
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
      <div className="form-group">
        <label>FUNÇÃO:</label>
        <select
          name="tipo_usuario"
          value={formData.tipo_usuario}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Funcionário">Funcionário</option>
          <option value="Aluno">Aluno</option>
          <option value="Professor">Professor</option>
        </select>
      </div>
      <button type="submit" className="submit-button">Cadastrar</button>
    </form>
  );
};

export default RegisterForm;