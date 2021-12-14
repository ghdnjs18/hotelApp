import React from "react";

const Accordion = ({ title, items, displayFilter }) => {
  return (
    <div className="Accordion-container">
      <div className="Accordion-menu" onClick={displayFilter}>
        <div className="Accordion-arrow">{items}</div>
        <div className="Accordion-title">{title}</div>
      </div>
    </div>
  );
};

export default Accordion;
