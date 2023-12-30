import React, { useState } from "react";
import accordionData from "../data/accordionData";
import AccordionItems from "./AccordionItems";
const Accordion = () => {
  let [active, setActive] = useState(0);

  return (
    <div>
      {accordionData.map(({ id, heading, details }, index) => {
        return (
          <AccordionItems
            key={id}
            heading={heading}
            details={details}
            activeIndex={index === active}
            setActive={setActive}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
