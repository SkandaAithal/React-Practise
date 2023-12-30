import React from "react";

const AccordionItems = ({
  heading,
  details,
  activeIndex,
  setActive,
  index,
}) => {
  function changeActive() {
    let nextIndex = activeIndex ? null : index;
    setActive(nextIndex);
  }

  return (
    <div onClick={changeActive}>
      <h1>{heading}</h1>
      {activeIndex && <p>{details}</p>}
    </div>
  );
};

export default AccordionItems;
