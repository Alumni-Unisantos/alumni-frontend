"use client";
import { useState } from "react";
import Link from "next/link";

const SignInForm = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Exibir a modal após o envio do formulário
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="section zubuz-extra-section">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Bem vindo</h2>
        </div>
        <div className="zubuz-account-wrap">
          <form onSubmit={handleSubmit}>
            <div className="zubuz-account-field">
              <label>E-mail</label>
              <input type="email" placeholder="informe seu e-mail" value="rafaela.mendes@unisantos.br" />
            </div>
            <div className="zubuz-account-field">
              <label>Senha</label>
              <input type="password" placeholder="Informe sua senha" value="Unisantos@123" />
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
                 {/* Modal personalizada */}
                 {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Funcionalidade em Desenvolvimento!</h3>
              <Link href="#"><button onClick={closeModal}>Fechar</button></Link>
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
      `}</style>
    </div>
  );
};

export default SignInForm;
