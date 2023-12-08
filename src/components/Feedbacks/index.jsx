import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";
function Feedback() {
  const [feedBacks, setFeedBacks] = useState([]);

  useEffect(() => {
    axios("https://65707df409586eff66418003.mockapi.io/api/feedbacks/1").then(
      (res) => {
        let updatedFeedbacks = res.data.feedbacks;

        while (updatedFeedbacks.length < 20) {
          updatedFeedbacks = [...updatedFeedbacks, ...updatedFeedbacks];
        }

        updatedFeedbacks = updatedFeedbacks.slice(0, 20);

        setFeedBacks(updatedFeedbacks);
      }
    );
  }, []);

  return (
    <div className="flexer">
      <div className="wrapper feedBack slider">
        <div className="slide-track">
          <div className="gradient-overlay"></div>
          {feedBacks.map((elem) => (
            <article key={elem.id} className="cardFeed slide">
              <div className="background">
                <img
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="profile"
                />
              </div>
              <div className="contentFeed">
                <h2>{elem.userName}</h2>
                <p>{elem.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feedback;
