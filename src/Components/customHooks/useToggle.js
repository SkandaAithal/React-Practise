import React, { useState } from "react";

function useToggle() {
  const [bool, setBool] = useState(false);

  function toggle() {
    setBool(!bool);
  }
  return { toggle, bool };
}
export { useToggle };
