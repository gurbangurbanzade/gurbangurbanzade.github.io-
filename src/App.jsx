// import { FaGithubAlt } from "react-icons/fa";
import { GiTwinShell } from "react-icons/gi";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Skills from "./components/Skills/index";
import "animate.css";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import Feedback from "./components/Feedbacks";
import {
  Pagination,
  Mousewheel,
  Keyboard,
  EffectCube,
  EffectFade,
} from "swiper/modules";
import { useRef, useState, useEffect } from "react";
import "react-bezier-curve-editor/index.css";
import { BezierCurveEditor } from "react-bezier-curve-editor";

function App() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const slideToHero = () => {
    if (swiper) {
      swiper.slideTo(0, 2000);
      setActiveIndex(0);
    }
  };

  const slideToIntro = () => {
    if (swiper) {
      swiper.slideTo(1, 2000);
    }
  };

  const slideToSkills = () => {
    if (swiper) {
      swiper.slideTo(2, 2000);
    }
  };

  const slideToProjects = () => {
    if (swiper) {
      swiper.slideTo(3, 2000);
    }
  };

  const slideToFooter = () => {
    if (swiper) {
      swiper.slideTo(5, 2000);
    }
  };

  const slideToFeedback = () => {
    if (swiper) {
      swiper.slideTo(4, 2000);
    }
  };

  const handleSlideChange = () => {
    if (swiper) {
      setActiveIndex(swiper.activeIndex);
    }
  };

  const scrollDown = () => {
    if (swiper) {
      if (activeIndex < 5) {
        swiper.slideNext();
      } else {
        slideToHero();
      }
    }
  };

  const goByID = () => {
    const goByID = document.querySelector(".Main2 #projects");
    console.log(goByID);
    if (goByID) {
      goByID.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  // // DELETE LATER
  // useEffect(() => {
  //   setLoading(true)
  // }, []);
  // // DELETE LATER

  return (
    <>
      {loading ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="sound-wave">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div>
          <div className="Main1">
            <Swiper
              style={{
                height: "100vh",
              }}
              onSwiper={setSwiper}
              className="mainswiper"
              modules={[
                Pagination,
                Mousewheel,
                Keyboard,
                EffectCube,
                EffectFade,
              ]}
              direction="vertical"
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={
                (() => console.log("slide change"), handleSlideChange)
              }
              mousewheel={true}
              speed={1000}
            >
              <Link
                to="https://github.com/"
                className="GithubLink"
                style={{ zIndex: 2 }}
              ></Link>
              <Link
                className="Home"
                style={{ zIndex: 2 }}
                onClick={slideToHero}
              >
                <GiTwinShell /> <span>SIA</span>
              </Link>
              <SwiperSlide>
                <Hero onButtonClick={slideToProjects} />
              </SwiperSlide>
              <SwiperSlide>
                <Intro activeIndex={activeIndex} />
              </SwiperSlide>
              <SwiperSlide className="skillsSlider">
                <Skills activeIndex={activeIndex} />
              </SwiperSlide>
              <SwiperSlide>
                <Projects activeIndex={activeIndex} />
              </SwiperSlide>
              <SwiperSlide>
                <Feedback activeIndex={activeIndex} />
              </SwiperSlide>
              <SwiperSlide>
                <Footer
                  onButtonClick={slideToProjects}
                  activeIndex={activeIndex}
                  context="main1"
                />
              </SwiperSlide>
            </Swiper>

            <a
              style={{
                zIndex: 2,
                position: "absolute",
                bottom: 100,
                right: -30,
                rotate: "-90deg",
                fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                cursor: "pointer",
              }}
              className="scrollBtn"
              onClick={scrollDown}
            >
              {activeIndex !== 5 ? (
                <span className="scrollBottom">{" < "}</span>
              ) : (
                " "
              )}{" "}
              Scroll {activeIndex === 5 ? "Home" : "Down"}{" "}
              {activeIndex === 5 ? (
                <span className="scrollTop">{" > "}</span>
              ) : (
                " "
              )}
            </a>

            <ul
              className="paginationMy"
              style={{
                zIndex: 2,
                position: "absolute",
                bottom: 300,
                right: 0,
                fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                display: "flex",
                flexDirection: "column",
                fontSize: "24px",
              }}
            >
              <li
                onClick={slideToHero}
                className={activeIndex === 0 ? "active" : ""}
              >
                00
              </li>
              <li
                onClick={slideToIntro}
                className={activeIndex === 1 ? "active" : ""}
              >
                01
              </li>
              <li
                onClick={slideToSkills}
                className={activeIndex === 2 ? "active" : ""}
              >
                02
              </li>
              <li
                onClick={slideToProjects}
                className={activeIndex === 3 ? "active" : ""}
              >
                03
              </li>
              <li
                onClick={slideToFeedback}
                className={activeIndex === 4 ? "active" : ""}
              >
                04
              </li>
              <li
                onClick={slideToFooter}
                className={activeIndex === 5 ? "active" : ""}
              >
                05
              </li>
              <div
                className={
                  activeIndex === 0
                    ? "active0 vertical-line"
                    : activeIndex === 1
                    ? "active1 vertical-line"
                    : activeIndex === 2
                    ? "active2 vertical-line"
                    : activeIndex === 3
                    ? "active3 vertical-line"
                    : activeIndex === 4
                    ? "active4 vertical-line"
                    : activeIndex === 5
                    ? "active5 vertical-line"
                    : "vertical-line"
                }
              ></div>
            </ul>
            <Outlet />
          </div>

          <div className="Main2">
            <Hero onButtonClick={goByID} />
            <Intro />
            <Skills />
            <Projects />
            <Feedback />
            <Footer context="main2" />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
