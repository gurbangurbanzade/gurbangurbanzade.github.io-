import React, { useState, useEffect } from "react";
// import "animate.css";
import "./intro.scss";

const index = ({ activeIndex }) => {
  const [animationPlayedIntro, setAnimationPlayedIntro] = useState(false);

  useEffect(() => {
    console.log("intro", activeIndex);
    console.log("intro", animationPlayedIntro);
    if (activeIndex === 1 && !animationPlayedIntro) {
      setAnimationPlayedIntro(true);
    } else {
      setAnimationPlayedIntro(false);
    }
  }, [activeIndex]);

  return (
    <div className="intro">
      <div
        className={` ${
          animationPlayedIntro ? "animate__animated animate__slideInUp" : ""
        } intro-part`}
      >
        <div className="left">
          <h1 className="intro-content">
            <div className="hey word">
              <h1 className="bounce">H</h1>
              <h1 className="bounce">e</h1>
              <h1 className="bounce">y</h1>
            </div>
            ,<div style={{ color: "transparent", fontSize: "20px" }}>a</div>
            <h1 className="bounce">I</h1>'<h1 className="bounce">m</h1>
            <div style={{ color: "transparent", fontSize: "20px" }}>a</div>
            <div className="seid  word ">
              <h1 className="bounce">S</h1>
              <h1 className="bounce">e</h1>
              <h1 className="bounce">i</h1>
              <h1 className="bounce">d</h1>
            </div>
            ,<div style={{ color: "transparent", fontSize: "20px" }}>a</div>
            <div className="joined  word">
              <h1 className="bounce">j</h1>
              <h1 className="bounce">o</h1>
              <h1 className="bounce">i</h1>
              <h1 className="bounce">n</h1>
              <h1 className="bounce">e</h1>
              <h1 className="bounce">d</h1>
            </div>
            <div style={{ color: "transparent", fontSize: "20px" }}>a</div>
            <div className="alongside  word">
              <h1 className="bounce">a</h1>
              <h1 className="bounce">l</h1>
              <h1 className="bounce">o</h1>
              <h1 className="bounce">n</h1>
              <h1 className="bounce">g</h1>
              <h1 className="bounce">s</h1>
              <h1 className="bounce">i</h1>
              <h1 className="bounce">d</h1>
              <h1 className="bounce">e</h1>
            </div>
            <div style={{ color: "transparent", fontSize: "20px" }}>a</div>
            <div className="by  word">
              <h1 className="bounce">b</h1>
              <h1 className="bounce">y</h1>
            </div>
            <div style={{ color: "transparent", fontSize: "20px" }}>a</div>
            <div className="aysun  word">
              <h1 className="bounce">A</h1>
              <h1 className="bounce">y</h1>
              <h1 className="bounce">s</h1>
              <h1 className="bounce">u</h1>
              <h1 className="bounce">n</h1>
            </div>
            <div style={{ color: "transparent", fontSize: "20px" }}>a</div>
            <div className="and  word">
              <h1 className="bounce">a</h1>
              <h1 className="bounce">n</h1>
              <h1 className="bounce">d</h1>
            </div>
            <div style={{ color: "transparent", fontSize: "20px" }}>a</div>
            <div className="ismayil  word">
              <h1 className="bounce">I</h1>
              <h1 className="bounce">s</h1>
              <h1 className="bounce">m</h1>
              <h1 className="bounce">a</h1>
              <h1 className="bounce">y</h1>
              <h1 className="bounce">i</h1>
              <h1 className="bounce">l</h1>
            </div>
            .<div style={{ color: "transparent", fontSize: "20px" }}>a</div>
            <div className="we  word">
              <h1 className="bounce">W</h1>
              <h1 className="bounce">e</h1>
            </div>
            '
            <div className="re  word">
              <h1 className="bounce">r</h1>
              <h1 className="bounce">e</h1>
            </div>
            <div style={{ color: "transparent", fontSize: "20px" }}>a</div>
            <div className="web  word">
              <h1 className="bounce">w</h1>
              <h1 className="bounce">e</h1>
              <h1 className="bounce">b</h1>
            </div>
            <div style={{ color: "transparent", fontSize: "20px" }}>a</div>
            <div className="development  word">
              <h1 className="bounce">d</h1>
              <h1 className="bounce">e</h1>
              <h1 className="bounce">v</h1>
              <h1 className="bounce">e</h1>
              <h1 className="bounce">l</h1>
              <h1 className="bounce">o</h1>
              <h1 className="bounce">p</h1>
              <h1 className="bounce">m</h1>
              <h1 className="bounce">e</h1>
              <h1 className="bounce">n</h1>
              <h1 className="bounce">t</h1>
            </div>
            <div style={{ color: "transparent", fontSize: "20px" }}>a</div>
            <div className="squad  word">
              <h1 className="bounce">s</h1>
              <h1 className="bounce">q</h1>
              <h1 className="bounce">u</h1>
              <h1 className="bounce">a</h1>
              <h1 className="bounce">d</h1>
            </div>
            , <div style={{ color: "transparent", fontSize: "20px" }}>a</div>
            <div className="ready  word">
              <h1 className="bounce">r</h1>
              <h1 className="bounce">e</h1>
              <h1 className="bounce">a</h1>
              <h1 className="bounce">d</h1>
              <h1 className="bounce">y</h1>
            </div>
            <div style={{ color: "transparent", fontSize: "20px" }}>a</div>
            <div className="to  word">
              <h1 className="bounce">t</h1>
              <h1 className="bounce">o</h1>
            </div>
            <div style={{ color: "transparent", fontSize: "20px" }}>a</div>
            <div className="craft  word">
              <h1 className="bounce">c</h1>
              <h1 className="bounce">r</h1>
              <h1 className="bounce">a</h1>
              <h1 className="bounce">f</h1>
              <h1 className="bounce">t</h1>
            </div>
            <div style={{ color: "transparent", fontSize: "20px" }}>a</div>
            <div className="digital  word">
              <h1 className="bounce">d</h1>
              <h1 className="bounce">i</h1>
              <h1 className="bounce">g</h1>
              <h1 className="bounce">i</h1>
              <h1 className="bounce">t</h1>
              <h1 className="bounce">a</h1>
              <h1 className="bounce">l</h1>
            </div>
            <div style={{ color: "transparent", fontSize: "20px" }}>a</div>
            <div className="wonders  word">
              <h1 className="bounce">w</h1>
              <h1 className="bounce">o</h1>
              <h1 className="bounce">n</h1>
              <h1 className="bounce">d</h1>
              <h1 className="bounce">e</h1>
              <h1 className="bounce">r</h1>
              <h1 className="bounce">s</h1>
            </div>
            .
          </h1>
          <p className="skillList">
            Front End Developer / Full Stack Developer / React Expert{" "}
          </p>
        </div>
        <div className="right">
          <p>Professionally connected with the web development industry.</p>
          <p>
            Problem solver, well-organised person, loyal employee with high
            attention to detail. Fan of Boxing, outdoor activities, video games,
            and coding of course.
          </p>
          <p>
            Interested in the entire frontend spectrum and working on ambitious
            projects with interesting people.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
