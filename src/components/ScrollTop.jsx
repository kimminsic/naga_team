import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { patchname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [patchname]);
  return null;
};

export default ScrollTop;
