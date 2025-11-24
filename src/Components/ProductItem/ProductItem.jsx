import styles from "./style.module.scss";
import reloadicon from "@icons/svgs/reloadicon.svg";
import hearticon from "@icons/svgs/hearticon.svg";
import carticon from "@icons/svgs/carticon.svg";
import truckicon from "@icons/svgs/truckicon.svg";
import cls from "classnames";
import Button from "@components/Button/Button";
import { useContext } from "react";
import { OurShopContext } from "@/contexts/OurShopProvider";

function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  isHomepage = true,
}) {


  const shopContext = useContext(OurShopContext);
  const isShowGrid = shopContext?.isShowGrid ?? true;


  const {
    boxImg,
    showImageWhenHover,
    showFnWhenHover,
    boxIcon,
    title,
    prices,
    boxSize,
    size,
    textCenter,
    boxBtn,
    content,
    containerItem,
    leftBtn,largImg
  } = styles;

  // console.log(isShowGrid);
  return (
    <div className={ isShowGrid ? '' : containerItem}>
      <div className={cls(boxImg, {[largImg]: !isHomepage})}>
        <img src={src} />
        <img src={prevSrc} className={showImageWhenHover} />

        <div className={showFnWhenHover}>
          <div className={boxIcon}>
            <img src={carticon} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={hearticon} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={reloadicon} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={truckicon} alt="" />
          </div>
        </div>
      </div>

      <div className={ isShowGrid ? '' : content}>
         {!isHomepage && (
        <div className={boxSize}>
          {details.size.map((item, index) => {
            return (
              <div className={size} key={index}>
                {item.name}
              </div>
            );
          })}
        </div>
      )}

      <div
        className={cls(title, {
          [textCenter]: !isHomepage,
        })}
      >
        {name}
      </div>
      {!isHomepage && (
        <div
        style={{color: '#888'}}
          className={textCenter}
        >
          Brand01
        </div>
      )}
      <div
         style={{ color: isHomepage ? "#333" : "#888" }}
        className={cls(price, {
          [textCenter]: !isHomepage,
        })}
      >
        {price}
      </div>

      {!isHomepage && (
        <div className={cls(boxBtn, {[leftBtn]: !isShowGrid})}>
          <Button content="ADD TO CART" />
        </div>
      )}
      </div>
    </div>
  );
}

export default ProductItem;
