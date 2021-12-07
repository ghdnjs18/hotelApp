import React from "react";
import "./Caption.css";

const Caption = ({ id, destinationId, caption, setCaption, highlight }) => {
  return (
    // data-????? = 리엑트에서 사용자가 만들어서 사용하는 속성을 설정할때 사용
    // 사용하는 곳에서 datset으로 데이터를 검색해서 사용할 수 있음
    <div
      className={`Caption-container ${highlight === id ? "highlight" : ""}`}
      id={id}
      data-destinationid={destinationId}
      onClick={setCaption}
      dangerouslySetInnerHTML={{ __html: caption }}
    ></div>
  );
};

export default Caption;

Caption.defaultProps = {
  highlight: 0,
};
