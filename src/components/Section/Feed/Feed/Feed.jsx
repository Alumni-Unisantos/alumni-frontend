"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const Feed = () => {
  
  const [textAreaHeight, setTextAreaHeight] = useState("60");
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [postagens, setPostagens] = useState([]);
  const [content, setContent] = useState("");

  const handleInput = (e) => {
    setContent(e.currentTarget.innerHTML);
  };

  const handleClickTextArea = () => {
    setTextAreaHeight("200");
  }

  const handleClickOutTextArea = () => {
    setTextAreaHeight("50");
  }

  const buscarPostagens = () => {
    fetch("http://localhost:8000/api/feed/buscarUltimasPostagens")
      .then(response => response.json())
      .then(data => {
        setPostagens(data);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  };

  useEffect(() => {
    buscarPostagens();
  }, []);

  const handleSubmitPost = () => {
    fetch("http://localhost:8000/api/feed/inserirPostagem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        conteudo: content,
        userId: '123'
      }),
    })
    .then(response => response.json())
    .then(data => {
        if (inputRef.current) {
          inputRef.current.innerHTML = "";
        }
        
        setPostagens([data, ...postagens]);
    })
    .catch(error => {
      console.error("Erro:", error);
    });
  };

  return (
    <div className="section zubuz-extra-section">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Feed</h2>
        </div>
      </div>
      <div className="input-card">
          <label>Novo Post</label>
          <div 
            className={`textarea-container ${isFocused ? 'focused' : ''}`} 
            onClick={() => setIsFocused(true)} 
          >
            
            <div
              contentEditable={true}
              className="textarea-input"
              onInput={handleInput}
              ref={inputRef}
              suppressContentEditableWarning={true}
            >
            </div>

            <div className="submit-container">
              <div className="submit-button" onClick={handleSubmitPost}>
                <span className="submit-text">Enviar</span>
              </div>
            </div>
          </div>
      </div>
      {postagens.map((postagem, index) => (
        <div className="card" key={index}>
          <div className="card-content">
            <div className="card-header">
              <img className="card-profile-image" src="/images/mock/anonimo.png" alt="imagem Perfil" />
              Teste da Silva
            </div>
            <div className="card-body" dangerouslySetInnerHTML={{ __html: postagem.conteudo }}></div>
            <div className="card-footer">
              <small>{new Date(postagem.dataPostagem).toLocaleString()}</small>
            </div>
          </div>
        </div>
      ))}

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
        .input-card {
          width: 100%;
          display: flex;
          justify-content:center;
          align-items: center;
          margin-bottom: 20px;
          flex-direction: column;
        }
        .input-card > label {
          text-align: left;
          width: 50%;
        }
        .textarea-container {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 10px;
          transition: border-color 0.2s, box-shadow 0.2s;
          width: 50%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .textarea-container.focused {
          border-color: #007bff;
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
        }

        .textarea-input {
          min-height: 100px;
          outline: none;
          border: none;
          padding: 8px;
          font-size: 16px;
        }

        .submit-container {
          display: flex;
          justify-content: flex-end;
        }

        .submit-button {
          background-color: blue;
          color: white;
          font-weight: bold;
          padding: 5px 15px;
          border: none;
          border-radius: 999px;
          font-size: 12px;
          cursor: pointer;
        }

        .submit-button:hover {
          background-color: darkblue;
        }


        .card {
          display: flex;
          justify-content:center;
          align-items: center;
          width: 100%;
          border: 0;
          margin-bottom: 20px;
        }
        .card-content {
          width: 50%;
          border: black solid 1px;
          text-align: justify;
          padding: 10px 20px;
          font-size: 16px;
          border-radius: 1%;
        }
        .card-header {
          display: flex;
          align-items: center;
        }
        .card-profile-image {
          width: 60px;
          border-radius: 50%;
          margin-right: 20px; 
        }
        .card-body {
        }
      `}</style>
    </div>
  );
};

export default Feed;