import React from "react";
import { useNavigate } from "react-router-dom";
import ChevronLeft from "../../assets/img/chevron_left.png";
import "./style.scss";
function BackBtn() {
  const navigate = useNavigate();
  return (
    <button
      className="backBtn"
      onClick={() => {
        navigate("/");
      }}
    >
      <img src={ChevronLeft} />
      Back
    </button>
  );
}

export default BackBtn;
