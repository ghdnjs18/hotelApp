import React from "react";

import "./AccordionItem.css";

const AccordionItem = ({ children }) => {
  return (
    <div className="AccordionItem-container">
      <div className="AccordionItem-checker">
        <input type="checkbox" name="" value="" />
      </div>
      <div className="AccordionItem-filter">{children}</div>
    </div>
  );
};

export default AccordionItem;
