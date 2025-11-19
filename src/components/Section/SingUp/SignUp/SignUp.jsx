"use client";
import React, { useState } from "react";
import Link from "next/link";

const SignUpForm = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
      nm_user: '',
      email_user: '',
      user_nm_parent: '',
      phone: '',
      vl_document: '',
      birthdate: '',
      nm_curso: '',
      ano_conclusao_curso: '',
      linkedin: '',
      password: '',
      confirmPassword: '',
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevData => ({
          ...prevData,
          [name]: value
      }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setIsLoading(true);
    setErrorMessage('');

    const { password, confirmPassword, email_user } = formData;
    
    if(email_user === '' || password === '' || confirmPassword === ''){
        setErrorMessage("Obrigatório preencher o email e a senha!");
        setIsLoading(false);
        return;
    }

    if (password !== confirmPassword) {
        setErrorMessage("As senhas não coincidem!");
        setIsLoading(false);
        return;
    }
    
    const dadosParaEnvio = { ...formData };
    delete dadosParaEnvio.confirmPassword;
    
    fetch("http://localhost:8000/api/users/create_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dadosParaEnvio),
    })
    .then(async response => {
      if(!response.ok) {
        const errorBody = await response.text();

        let specificError;
        try {
          const jsonError = JSON.parse(errorBody);
          specificError = jsonError.message || jsonError || errorBody;
        } catch {
          specificError = errorBody.replace(/"/g, '');
        }
        const errorMessage = specificError || `Erro na requisição: ${response.status} ${response.statusText}`;
        setIsLoading(false);
        setErrorMessage(errorMessage);
        throw new Error(errorMessage);
      }
      return response.json();
    })
    .then(data => {
        setFormData({
          nm_user: '', email_user: '', user_nm_parent: '', phone: '', vl_document: '', 
          birthdate: '', nm_curso: '', ano_conclusao_curso: '', 
          linkedin: '', password: '', confirmPassword: '',
        });
        setSuccessMessage(data.message || 'Usuário cadastrado com sucesso!');
        setIsLoading(false);
        setIsModalOpen(true);
    })
    .catch(error => {
      console.error("Erro na Requisição:", error);
      setIsLoading(false); 
      if (error.message.includes('Failed to fetch')) {
        setErrorMessage('Erro de conexão com o servidor.');
      } else {
        setErrorMessage(error.message); 
      }
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeErrorModal = () => {
    setErrorMessage('');
  };

  return (
    <div className="section zubuz-extra-section">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Cadastro de Usuário</h2>
        </div>
        <div className="zubuz-account-wrap">

        {errorMessage && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="modal-close-btn" onClick={closeErrorModal} aria-label="Fechar">
                &times;
              </button>
              
              <div className="modal-message-wrap">
                  <h3>Erro de Cadastro</h3>
                  <p>{errorMessage}</p>
              </div>
            </div>
          </div>
        )}

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="zubuz-account-field col">
                <label>Nome</label>
                <input type="text" placeholder="Informe o nome completo" name="nm_user" value={formData.nm_user} onChange={handleChange} />
              </div>
              <div className="zubuz-account-field col">
                <label>E-mail</label>
                <input type="email" placeholder="Informe o e-mail" name="email_user" value={formData.email_user} onChange={handleChange} />
              </div>
            </div>
            <div className="row">
            <div className="zubuz-account-field col">
                <label>Nome da Mãe ou Pai</label>
                <input type="text" placeholder="Informe o nome completo (mãe ou pai)" name="user_nm_parent" value={formData.user_nm_parent} onChange={handleChange} />
              </div>
              <div className="zubuz-account-field col">
                <label>Telefone</label>
                <input type="text" placeholder="Informe um número para contato" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="row">
              <div className="zubuz-account-field col">
                <label>CPF</label>
                <input type="text" placeholder="Informe o número de CPF" name="vl_document" value={formData.vl_document} onChange={handleChange} />
              </div>
              <div className="zubuz-account-field col">
                <label>Data de Nascimento</label>
                <input type="text" placeholder="Informe a data de Nascimento" name="birthdate" value={formData.birthdate} onChange={handleChange} />
              </div>
            </div>
            <div className="row">
            <div className="zubuz-account-field col">
              <label>Última Formação</label>
              <input type="text" placeholder="Informe o tipo de graduação" name="nm_curso" value={formData.nm_curso} onChange={handleChange} />
            </div>
            <div className="zubuz-account-field col">
              <label>Ano de Curso</label>
              <input type="text" placeholder="Informe o ano da última graduação" name="ano_conclusao_curso" value={formData.ano_conclusao_curso} onChange={handleChange} />
            </div>
            </div>
            <div className="row">
              <div className="zubuz-account-field col">
              <label>Linkedin</label>
              <input type="text" placeholder="Informe o perfil no linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} />
              </div>
            </div>
            <div>
            </div>
            <div className="row">
              <div className="zubuz-account-field col">
                <label>Senha</label>
                <input type="password" placeholder="Informe a senha" name="password" value={formData.password} onChange={handleChange} />
              </div>
              <div className="zubuz-account-field col">
                <label>Repetir Senha</label>
                <input type="password" placeholder="Repita a senha" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
              </div>
            </div>
            <button id="zubuz-account-btn" type="submit" disabled={isLoading}>
              <span>Cadastrar</span>
            </button>
            <div className="zubuz-or">
              <p>OU</p>
            </div>
            <div className="zubuz-account-bottom">
              <p>
                Já possui uma conta? <Link href="sign-in">Faça o login aqui</Link>
              </p>
            </div>
          </form>
        </div>

        {isLoading && (
          <div className="loader-overlay">
              <div className="spinner"></div>
          </div>
        )}

        {/* Modal personalizada */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>{successMessage}</h3>
              <Link href="/sign-in"><button onClick={closeModal}>Fechar</button></Link>
            </div>
          </div>
        )}

      </div>
      {/* Estilos para a modal */}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }
        .modal-content {
          width: 50%;
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          position: relative;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
        }
        .modal-content h3 {
          margin: 0 0 20px;
        }
        .modal-content button {
          color: rgba(0, 0, 0, 1);
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
        }
        .modal-close-btn {
          position: absolute;
          top: 0px;
          right: 0px;
          background: none;
          border: none;
          font-size: 28px;
          font-weight: 300;
          color: #666;
          cursor: pointer;
          line-height: 1;
          padding: 0;
          transition: color 0.2s;
        }
        .modal-close-btn:hover {
          color: #333;
        }
        .modal-error-content {
          background: #ffe6e6;
          border: 2px solid #cc0000;
          color: #cc0000;
        }
        .loader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        .spinner {
          border: 5px solid #f3f3f3;
          border-top: 5px solid #007bff;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      </div>

    
  );
};

export default SignUpForm;
