"use client";
import { useState } from "react";
import Link from "next/link";

const SignUpForm = () => {
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
          <h2>Cadastro de Usuário</h2>
        </div>
        <div className="zubuz-account-wrap">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="zubuz-account-field col">
                <label>Nome</label>
                <input type="text" placeholder="Informe o nome completo" value="Rafaela Mendes Lomba Pinho" />
              </div>
              <div className="zubuz-account-field col">
                <label>E-mail</label>
                <input type="email" placeholder="Informe o e-mail" value="rafaela.mendes@unisantos.br" />
              </div>
            </div>
            <div className="row">
            <div className="zubuz-account-field col">
                <label>Nome da Mãe ou Pai</label>
                <input type="text" placeholder="Informe o nome completo (mãe ou pai)" value="Mariangela Mendes Lomba Pinho" />
              </div>
              <div className="zubuz-account-field col">
                <label>Telefone</label>
                <input type="text" placeholder="Informe um número para contato" value="13 99604-0376" />
              </div>
            </div>
            <div className="row">
              <div className="zubuz-account-field col">
                <label>CPF</label>
                <input type="text" placeholder="Informe o número de CPF" value="47106542806"/>
              </div>
              <div className="zubuz-account-field col">
                <label>Data de Nascimento</label>
                <input type="text" placeholder="Informe a data de Nascimento" value="09/08/1996" />
              </div>
            </div>
            <div className="row">
            <div className="zubuz-account-field col">
              <label>Última Formação</label>
              <input type="text" placeholder="Informe o tipo de graduação" value="Especialização"/>
            </div>
            <div className="zubuz-account-field col">
              <label>Ano de Curso</label>
              <input type="text" placeholder="Informe o ano da última graduação" value="2020" />
            </div>
            </div>
            <div className="row">
              <div className="zubuz-account-field col">
              <label>Linkedin</label>
              <input type="text" placeholder="Informe o perfil no linkedin" />
              </div>
            </div>
            <div>
            </div>
            <div className="row">
              <div className="zubuz-account-field col">
                <label>Senha</label>
                <input type="password" placeholder="Informe a senha" name="senha" value="Unisantos@123" />
              </div>
              <div className="zubuz-account-field col">
                <label>Repetir Senha</label>
                <input type="password" placeholder="Repita a senha" name="confirmarSenha" value="Unisantos@123" />
              </div>
            </div>
            <button id="zubuz-account-btn" type="submit">
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

         {/* Modal personalizada */}
         {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Usuário cadastrado com sucesso!</h3>
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





export default SignUpForm;
