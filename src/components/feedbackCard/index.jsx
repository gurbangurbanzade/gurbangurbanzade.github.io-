import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./style.scss";

const FeedbackCard = ({ user }) => {
  console.log(user);
  return (
    <article className="review salam">
      <div className="img-container">
        <img src={user.image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{user.name}</h4>
      <p className="job">Frontend Developer</p>
      <p className="info">{user.text}</p>
    </article>
  );
};

export default FeedbackCard;
