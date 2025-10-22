import { useEffect, useRef, useState } from "react";

const useCrollHandling = () => {
  const [scrollDriction, setScrollDriction] = useState(null);
  const previousScrollPosition = useRef(0);
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


   useEffect(() => {
      window.addEventListener("scroll", scrollTracking);
      return () => window.removeEventListener("scroll", scrollTracking);
    }, []);


    return {
        scrollDriction,
        scrollPosition
    }
};

export default useCrollHandling;
