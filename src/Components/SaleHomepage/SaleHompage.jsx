import Button from "@components/Button/Button";
import styles from "./style.module.scss";
import { useEffect, useRef, useState } from "react";
import useTranslateX from "@components/SaleHomepage/translateXImage";

function SaleHomepage() {
  const { container, title, des, boxBtn, boxImage } = styles;

    const {translateXPosition,handleTranslateX,scrollPosition} = useTranslateX();

  useEffect(() => {
    handleTranslateX();
  }, [scrollPosition]);

  console.log(scrollPosition);
  return (
    <div className={container}>
      <div
        className={boxImage}
        style={{
          transform: `translateX(${translateXPosition}px)`,
          transition: "transform 0.5s ease",
        }}
      >
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg"
          alt=""
        />
      </div>
      <div>
        <h2 className={title}>Sale of The Year</h2>
        <p className={des}>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales
        </p>
        <div className={boxBtn}>
          <Button content={"Read more"} isPrimary={false} />
        </div>
      </div>
      <div className={boxImage} style={{
          transform: `translateX(-${translateXPosition}px)`,
          transition: "transform 0.5s ease",
        }}>
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

export default SaleHomepage;
