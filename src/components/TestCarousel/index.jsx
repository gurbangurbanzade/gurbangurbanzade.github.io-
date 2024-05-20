/* eslint-disable react/prop-types */

import { useRef, useState } from "react";
import styles from "./style.module.scss";
import { v4 as uuuidv4 } from "uuid";

const TestCarousel = ({ customers }) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    if (sliderRef.current) {
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Hız çarpanı
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleSlide = (direction) => {
    if (sliderRef.current) {
      const cards = sliderRef.current;
      let cardWidth = cards.firstElementChild?.clientWidth || 0;
      const offset = direction === "left" ? -cardWidth : cardWidth;
      const currentTransform = cards.style.transform
        ? parseInt(
            cards.style.transform.replace("translateX(", "").replace("px)", "")
          )
        : 0;
      const newTransform = currentTransform + offset;

      const minTransform = -cards.scrollWidth + cardWidth;
      const maxTransform = 0;
      if (newTransform >= minTransform && newTransform <= maxTransform) {
        cards.style.transition = "transform 0.5s ease-in-out";
        cards.style.transform = `translateX(${newTransform}px)`;
      }
    }
  };

  return (
    <section>
      <div id={styles.feedbackContainer} className="container">
        <div id={styles.feedback}>
          <div className={styles.header}>
            <div className={styles.leftSide}>
              <h2>Don’t just take our word for it</h2>
              <p>
                Hear from some of our amazing customers who are building faster.
              </p>
            </div>
            <div className={styles.btnBox}>
              <button
                className={styles.left}
                onClick={() => handleSlide("left")}
              >
                -
              </button>
              <button
                className={styles.right}
                onClick={() => handleSlide("right")}
              >
                +{" "}
              </button>
            </div>
          </div>
          <div>
            <div
              className={styles.cardSlider}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <div className={styles.cards} ref={sliderRef}>
                {customers.map((customer) => {
                  console.log(customer);
                  return (
                    <div key={uuuidv4()} className={styles.card}>
                      {/* <Image
                      src={customer.img}
                      alt={customer.name}
                      width={92}
                      height={92}
                    /> */}
                      <img
                        className={styles.cardImg}
                        src={customer.image}
                        alt=""
                      />

                      <h5>
                        {customer.name} {customer.surname}
                      </h5>
                      <p>{customer.position}</p>
                      {/* <div className={styles.starBox}>
                      {[1, 2, 3, 4, 5].map((star) =>
                        star <= customer.starCount ? (
                          <Image
                            key={uuuidv4()}
                            src={starIcon}
                            alt="star icon"
                          />
                        ) : null
                      )}
                    </div> */}
                      <p className={styles.text}>{customer.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestCarousel;
