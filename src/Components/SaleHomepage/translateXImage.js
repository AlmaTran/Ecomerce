 import { useEffect, useRef, useState } from "react";


 const useTranslateX = () => {
      const [scrollDriction, setScrollDriction] = useState(null);
  const previousScrollPosition = useRef(0);
  const [translateXPosition, setTranslateXPosition] = useState(80);
  const [scrollPosition, setScrollPositon] = useState(0);

  const scrollTracking = () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > previousScrollPosition.current) {
      setScrollDriction("down");
    } else if (currentScrollPosition < previousScrollPosition.current) {
      setScrollDriction("up");
    }

    previousScrollPosition.current =
      currentScrollPosition <= 0 ? 0 : currentScrollPosition;

    setScrollPositon(currentScrollPosition);
  };

  const handleTranslateX = () => {
    if (scrollDriction === "down" && scrollPosition >= 1500) {
      setTranslateXPosition(
        translateXPosition <= 0 ? 0 : translateXPosition - 1
      );
    } else if (scrollDriction === "up") {
      setTranslateXPosition(
        translateXPosition >= 80 ? 80 : translateXPosition + 1
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollTracking);
    return () => window.removeEventListener("scroll", scrollTracking);
  }, []);

  return {
    translateXPosition,
    handleTranslateX,
    scrollPosition
  }
 }

 export default useTranslateX