import React, { useState } from "react";
import FlagContext from "./FlagContext";

const FlagState = ({ children }) => {
  const [postFlag, setPostFlag] = useState(true);
  return (
    <FlagContext.Provider value={[ postFlag, setPostFlag ]}>
      {children}
    </FlagContext.Provider>
  );
};

export default FlagState;
