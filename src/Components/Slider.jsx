import React, { useEffect, useState } from "react";
import sliderdata from "../data/sliderdata";
import sliderstyles from "../css/slider.module.css";
import { useSlider } from "./customHooks/useSlider";

function Slider() {
  let { left, right, count } = useSlider();
  return (
    <div>
      <div className={sliderstyles.slider}>
        <button onClick={left}>&lt;</button>
        <img src={sliderdata[count]} alt="" />
        <button onClick={right}>&gt;</button>
      </div>
    </div>
  );
}

export default Slider;

// import React, { useEffect, useState } from "react";
// import sliderdata from "../data/sliderdata";
// import sliderstyles from "../css/slider.module.css";

// function Slider() {
//   let [count, setCount] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Move to the next slide
//       if (count === sliderdata.length - 1) {
//         setCount(0);
//       } else {
//         setCount(count + 1);
//       }
//     }, 2000);

//     // Clear the interval when the component unmounts or when count changes
//     return () => clearInterval(interval);
//   }, [count]);

//   function right() {
//     if (count === sliderdata.length - 1) {
//       setCount(0);
//     } else {
//       setCount(count + 1);
//     }
//   }

//   function left() {
//     if (count === 0) {
//       setCount(sliderdata.length - 1);
//     } else {
//       setCount(count - 1);
//     }
//   }

//   return (
//     <div>
//       <div className={sliderstyles.slider}>
//         <button onClick={left}>&lt;</button>
//         <img src={sliderdata[count]} alt="" />
//         <button onClick={right}>&gt;</button>
//       </div>
//     </div>
//   );
// }

// export default Slider;
