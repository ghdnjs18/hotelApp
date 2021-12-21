import React from "react";
import { handleNullObj } from "lib";
import "./Review.css";

const Review = ({ review }) => {
  console.log(review);
  const {
    formattedRating,
    qualitativeBadgeText,
    summary,
    title,
    recommendedBy,
  } = handleNullObj(review);
  return (
    <div className="Review-container">
      <div className="Review-rating">
        <div
          className={`Review-badge ${
            parseInt(formattedRating) < 8 ? "Review-badge-gray" : ""
          }`}
        >
          {formattedRating}
        </div>
        <div className="Review-badgeText">{qualitativeBadgeText}</div>
      </div>
      <div className="Review-text">
        <p className="Review-text-title">{title}</p>
        <p>{summary}</p>
        <div className="Review-user">
          {recommendedBy ? `- ${recommendedBy} -` : ""}
        </div>
      </div>
    </div>
  );
};

export default Review;
