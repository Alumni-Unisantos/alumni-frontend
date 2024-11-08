"use client";
import { useState } from "react";

const HeroSection = () => {
  const [popup, setPopup] = useState(false);

  const openPopup = () => {
    setPopup(true);
    const iframe = document.getElementById("youtube-video");
    if (iframe) {
      iframe.src = "https://www.youtube.com/embed/SixdAQtWJQ8?si=TPxjQ04JgcZ5eEA9";
    }
  };

  return (
    <>
      <div
        className="zubuz-hero-section white-bg"
        style={{ backgroundImage: "url(/images/v1/blue_redimensionado.png)" }}
      >
        <div className="container">
          <div className="zubuz-hero-content center position-relative">
            <h2>Bem-Vindo de volta a UNISANTOS</h2>
            <p> Uma plataforma destinada a conectar ex-alunos da Universidade </p>
            <div className="zubuz-hero-shape">
              <img src="/images/v1/shape.png" alt />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
