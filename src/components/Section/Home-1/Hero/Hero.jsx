"use client";
import Link from "next/link";
import { useState } from "react";
import ReactPlayer from "react-player";
import { IoClose } from "react-icons/io5";
// import "./hero.css";

const HeroSection = () => {
  const [popup, setPopup] = useState(false);

  const openPopup = () => {
    setPopup(true);
    const iframe = document.getElementById("youtube-video");
    if (iframe) {
      iframe.src = "https://www.youtube.com/embed/SixdAQtWJQ8?si=TPxjQ04JgcZ5eEA9";
    }
  };

  const closePopup = () => {
    setPopup(false);
    const iframe = document.getElementById("youtube-video");
    if (iframe) {
      iframe.src = "";
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
            <h1>Boas vindas de volta a Unisantos!</h1>
            <p> Uma plataforma para reunir os egressos da Universidade </p>
            <div className="zubuz-hero-shape">
              <img src="/images/v1/shape.png" alt />
            </div>
          </div>
          {/* <div className="zubuz-hero-bottom">
            <div className="zubuz-hero-thumb wow fadeInUpX">
              <img src="/images/v1/hero-mocup1.png" alt />
            </div>
            <div className="zubuz-hero-card card1 wow zoomIn">
              <img src="/images/v1/h-card1.png" alt />
            </div>
            <div className="zubuz-hero-card card2 wow zoomIn">
              <img src="/images/v1/h-card2.png" alt />
            </div>
            <div className="zubuz-hero-card card3 wow zoomIn">
              <img src="/images/v1/h-card4.png" alt />
            </div>
            <div className="zubuz-hero-card card4 wow zoomIn">
              <img src="/images/v1/h-card3.png" alt />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
