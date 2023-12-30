import React, { useEffect, useState } from "react";
import sliderdata from "../../data/sliderdata";
function useSlider() {
  let [count, setCount] = useState(0);
  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      if (count === sliderdata.length - 1) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [count]);

  function right() {
    if (count === sliderdata.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }
  function left() {
    if (count === 0) {
      setCount(sliderdata.length - 1);
    } else {
      setCount(count - 1);
    }
  }
  return { left, right, count };
}
export { useSlider };
