import useCrollHandling from "@/hooks/useScrollHandling"
import { useEffect, useState } from "react";

const useTranslateXImgae = () => {
    const { scrollPosition, scrollDriction} = useCrollHandling();
    const [translateXPosition, setTranslateXPosition] = useState(80);

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
        handleTranslateX();

      }, [scrollPosition]);
    
      return {
        translateXPosition,
      }
}

export default useTranslateXImgae;