import React from "react";
import "./hero.scss";
import Github from "../../assets/img/github (1).svg";
import Instagram from "../../assets/img/instagram.svg";
import X from "../../assets/img/x-twitter.svg";
import Youtube from "../../assets/img/youtube.svg";
import ProfileImg from "../../../src/assets/img/heroBannerImg/profile.png";
import Arrow1 from "../../../src/assets/img/heroBannerImg/arrow1.png";
import Arrow2 from "../../../src/assets/img/heroBannerImg/arrow2.png";
import Arrow3 from "../../../src/assets/img/heroBannerImg/arrow3.png";
import Arrow4 from "../../../src/assets/img/heroBannerImg/arrow4.png";
import Slash from "../../../src/assets/img/heroBannerImg/slash.png";
import Profile1 from "../../../src/assets/img/heroBannerImg/profile1.png";
import { FaArrowRight } from "react-icons/fa";

const Hero = ({ onButtonClick }) => {
  return (
    <section
      className="hero-section"
      style={{
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="content grid grid-rows-4">
        <div className="logoBox">
          <div className="imgBox">
            {/* <img src={ProfileImg} alt="" /> */}
            <img src={Arrow1} className="arrow1" alt="" />
            <img src={Arrow2} className="arrow2" alt="" />
            <img src={Arrow3} className="arrow3" alt="" />
            <img src={Arrow4} className="arrow4" alt="" />
            <img
              src={Profile1}
              className="profile1  animate__delay-2s"
              alt=""
            />
            <img src={Slash} className="slash" alt="" />
          </div>
        </div>
        <div className="textBox">
          <h1>
            Hello, I am <span>Gurban</span>.
            <br /> Web and Mobile developer.
          </h1>
          <button className="btn" onClick={onButtonClick} style={{ zIndex: 1 }}>
            View my work <FaArrowRight className="arrowLeft" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
