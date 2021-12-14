import React from "react";
import { isArrayNull } from "lib";

import "Accordion.css";

const Accordion = ({ title, items, displayFilter }) => {
  return (
    <div className="Accordion-container">
      <div className="Accordion-menu" onClick={displayFilter}>
        <div className="Accordion-arrow"></div>
        <div className="Accordion-title">{title}</div>
      </div>
      <div className="Accordion-items">
        {isArrayNull(items) &&
          items.map((item) => {
            return <AccordionItem key={item.value}>{item.label}</AccordionItem>;
          })}
      </div>
    </div>
  );
};

export default Accordion;
