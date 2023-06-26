import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import Detail from "../Detail";
import reviews from "../../redux/modules/reviews";

const reviews = ({ onsubmit }) => {
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onsubmit(reviews);
    setReview("");
  };

  const handlechange = (e) => {
    setReview(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={review} onChange={handleChange} />
      <button type="submit">댓글 작성</button>
    </form>
  );
};

export default reviews;
