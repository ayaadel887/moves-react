import React, { useEffect, useState } from "react";
/*---- learn more aboutremoveEventListener */
const useResizeScreen = () => {
  const [resize, setResize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handelWindowrResize = () => {
      setResize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handelWindowrResize);
    return () => {
      window.removeEventListener("resize", handelWindowrResize);
    };
  }, []);
  return { width: resize.width, height: resize.height };
};

export default useResizeScreen;
