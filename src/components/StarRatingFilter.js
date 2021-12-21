import React from "react";
import "./starRatingFilter.css";

import { isArrayNull } from "lib";

const starRatingFilter = ({
  title,
  items,
  querystring,
  searchHotelsWithFilter,
}) => {
  // 숙박시설 등급 오름차순 정렬
  const reversedItems = items.sort((a, b) => {
    return a.value - b.value;
  });
  return (
    <div className="StarRatingFilter-container">
      <div className="StarRatingFilter-title">{title}</div>
      <div className="StarRatingFilter-btns">
        {!isArrayNull(reversedItems) &&
          reversedItems.map((item, idx) => {
            return (
              <div
                className="StarRatingFilter-rating"
                key={idx}
                onClick={() => searchHotelsWithFilter(querystring, item.value)}
              >
                {item.value}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default starRatingFilter;
