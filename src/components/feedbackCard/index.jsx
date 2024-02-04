import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./style.scss";

const FeedbackCard = ({ user }) => {
  return (
    // <article className="review salam">
    //   <div className="img-container">
    //     <img src={user.image} alt={name} className="person-img" />
    //     <span className="quote-icon">
    //       <FaQuoteRight />
    //     </span>
    //   </div>
    //   <h4 className="author">{user.name}</h4>
    //   <p className="job">Frontend Developer</p>
    //   <p className="info">{user.text}</p>
    // </article>
    <div className="review-card">
      <div className="header-content">
        <div className="img-area">
          <img alt={name} src={user.image} />
        </div>
        <div className="info">
          <h4>{user.name}</h4>
          <h4>{user.surname}</h4>
          <p>Frontend Developer</p>
        </div>
      </div>
      <div className="single-review">
        <p>
          {user.text.substring(0, 150)} {user.text.length > 100 ? "..." : null}
        </p>
      </div>
      <div className="review-footer">
        <p>Reviewed on </p>
        <p> {user.createdAt.substring(0, 10)} </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
