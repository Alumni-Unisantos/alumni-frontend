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
    setIsFocused(true);
    setTextAreaHeight("200");

    if (inputRef.current && inputRef.current.innerHTML === "Digite aqui...") {
      inputRef.current.innerHTML = "";
    }
  }

  const handleClickOutTextArea = () => {
    setIsFocused(false);
    setTextAreaHeight("120");

    if (inputRef.current && inputRef.current.innerHTML.trim() === "") {
      inputRef.current.innerHTML = "Digite aqui...";
    }
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
        userId: '1'
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
            onFocus={handleClickTextArea}
            onBlur={handleClickOutTextArea}
          >
            
            <div
              contentEditable={true}
              className="textarea-input"
              onInput={handleInput}
              ref={inputRef}
              suppressContentEditableWarning={true}
            >
              Digite aqui...
            </div>

            <div className="submit-container">
              <div className="submit-button" onMouseDown={(e) => e.preventDefault()} onClick={handleSubmitPost}>
                <span className="submit-text">Enviar</span>
              </div>
            </div>
          </div>
      </div>
      {postagens.map((postagem, index) => (
        <div className="card-postagem" key={index}>
          <div className="card-postagem-content">
            <div className="card-postagem-header">
              <img className="card-profile-image" src="/images/v1/genericManIcon.png" alt="imagem Perfil" />
              Nome do Usuário
            </div>
            <div className="card-body" dangerouslySetInnerHTML={{ __html: postagem.conteudo }}></div>
            <div className="card-postagem-footer">
              <small>
                {new Intl.DateTimeFormat("pt-BR", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                }).format(new Date(postagem.dataPostagem))} ·{" "}
                {new Intl.DateTimeFormat("pt-BR", {
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                }).format(new Date(postagem.dataPostagem))}
              </small>
            </div>
          </div>
        </div>
      ))}

      <style jsx>{`
        h2 {
        color:#00225C; 
        }
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
          border-radius: 10px;
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
          min-height: 120px;
          outline: none;
          border: none;
          padding: 8px;
          font-size: 16px;
          height: ${textAreaHeight}px;
          overflow-y: auto;
        }

        .submit-container {
          display: flex;
          justify-content: flex-end;
        }

        .submit-button {
          background-color: #00225C;
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

        .card-postagem {
          display: flex;
          justify-content:center;
          align-items: center;
          width: 100%;
          border: 0;
          margin-bottom: 20px;
        }
        .card-postagem-content {
          width: 50%;
          text-align: justify;
          font-size: 16px;
          border-radius: 10px;
          margin-top: 20px;
        }
        .card-postagem-header {
          display: flex;
          align-items: center;
          padding: 10px 20px;
          font-weight: bold;
          background-color: #00225C;
          color: white;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          border-top: 1px solid #000;
        }
        .card-profile-image {
          width: 40px;
          border-radius: 50%;
          margin-right: 10px; 
        }
        .card-body {
          padding: 15px 20px;
          border-left: 1px solid #000;
          border-right: 1px solid #000;
          background-color: white;
        }
        .card-postagem-footer {
          text-align: right;
          font-size: 14px;
          color: gray;
          padding: 10px 20px;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-bottom: 1px solid #000;
          border-left: 1px solid #000;
          border-right: 1px solid #000;
        }
      `}</style>
    </div>
  );
};

export default Feed;