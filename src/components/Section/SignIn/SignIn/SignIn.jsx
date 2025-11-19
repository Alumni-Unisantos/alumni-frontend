"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";
import UserContext from "~/contexts/UserContext";

const SignInForm = () => {

  const {user, setUser} = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
      email_user: '',
      password: ''
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
    
    const { email_user, password } = formData;

    if(email_user === '' || password === ''){
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const dadosParaEnvio = { ...formData };

    fetch("http://localhost:8000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dadosParaEnvio),
    })
    .then(async response => {
      if(!response.ok) {
        const errorBody = await response.text();

        console.log(errorBody);

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
        if (typeof setUser === 'function') {
            setUser({ id: data.id, nm_user: data.nm_user });
            localStorage.setItem('user_id', data.id);
            localStorage.setItem('user_nm', data.nm_user);
        } else {
            console.error("Contexto indisponível: Não foi possível salvar o estado do usuário.");
        }

        setFormData({
          email_user: '', password: ''
        });
        setIsLoading(false);
        window.location.href = '/feed';
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

  const closeErrorModal = () => {
    setErrorMessage('');
  };

  return (
    <div className="section zubuz-extra-section">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Bem vindo</h2>
        </div>
        <div className="zubuz-account-wrap">

          {errorMessage && (
            <div className="modal-overlay">
              <div className="modal-content">
                <button className="modal-close-btn" onClick={closeErrorModal} aria-label="Fechar">
                  &times;
                </button>
                
                <div className="modal-message-wrap">
                    <h3>Erro de Login</h3>
                    <p>{errorMessage}</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="zubuz-account-field">
              <label>E-mail</label>
              <input type="email" placeholder="informe seu e-mail" name="email_user" value={formData.email_user} onChange={handleChange} />
            </div>
            <div className="zubuz-account-field">
              <label>Senha</label>
              <input type="password" placeholder="Informe sua senha" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div className="zubuz-account-checkbox-wrap">
              <Link className="forgot-password" href="reset-password">
                Recuperar Senha?
              </Link>
            </div>
            <button id="zubuz-account-btn" type="submit">
              <span>Login</span>
            </button>
            <div className="zubuz-or">
              <p>OU</p>
            </div>
            <div className="zubuz-account-bottom">
              <p>
                Ainda não possui cadastro? <Link href="sign-up">Cadastre-se aqui</Link>
              </p>
            </div>
          </form>
        </div>

        {isLoading && (
          <div className="loader-overlay">
              <div className="spinner"></div>
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
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
        }
        .modal-content h3 {
          margin: 0 0 20px;
        }
        .modal-content button {
          background: #007bff;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
        }
        .modal-content button:hover {
          background: #0056b3;
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

export default SignInForm;
