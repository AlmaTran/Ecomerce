import styles from "./style.module.scss";
import reloadicon from "@icons/svgs/reloadicon.svg";
import hearticon from "@icons/svgs/hearticon.svg";
import carticon from "@icons/svgs/carticon.svg";
import truckicon from "@icons/svgs/truckicon.svg";
import cls from "classnames";
import Button from "@components/Button/Button";
import { useContext, useEffect, useState } from "react";
import { OurShopContext } from "@/contexts/OurShopProvider";
import Cookies from "js-cookie";
import { SideBarContext } from "@/contexts/SideBarProvider";
import { ToastContext } from "@/contexts/ToastProvider";
import { addProductToCart } from "@/apis/cartService";

function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  isHomepage = true,
}) {
  // const shopContext = useContext(OurShopContext);
  // const isShowGrid = shopContext?.isShowGrid ?? true;
  const [sizeChoosel, setSizeChoosel] = useState("");
  const ourShopStore = useContext(OurShopContext);
  const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
  const userId = Cookies.get("userId");
  const { setIsOpen, setType } = useContext(SideBarContext);
  const { toast } = useContext(ToastContext);

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
    leftBtn,
    largImg,
    isActiceSize,
    btnClear,
  } = styles;

  const handleChooselSize = (size) => {
    setSizeChoosel(size);
  };

  const handleClearSize = () => {
    setSizeChoosel("");
  };
  const handleAddToCart = () => {
    console.log(userId);
    if (!userId) {
      setIsOpen(true);
      setType("login");
      toast.warning("Please login to add product to cart");

      return;
    }

    if (!sizeChoosel) {
      toast.warning("Please choose size!");
      return;
    }

  

    const data = {
      userId,
      productId: details._id,
      quantity: 1,
      size: sizeChoosel
    }


    addProductToCart(data)
      .then((res) => {

      })
      .catch((res) => {
        
      })
  };
  useEffect(() => {
    if (isHomepage) {
      setIsShowGrid(true);
    } else {
      setIsShowGrid(ourShopStore?.isShowGrid);
    }
  }, [isHomepage, ourShopStore?.isShowGrid]);

  // console.log(isShowGrid);
  return (
    <div className={isShowGrid ? "" : containerItem}>
      <div className={cls(boxImg, { [largImg]: !isHomepage })}>
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

      <div className={isShowGrid ? "" : content}>
        {!isHomepage && (
          <div className={boxSize}>
            {details.size.map((item, index) => {
              return (
                <div
                  className={cls(size, {
                    [isActiceSize]: sizeChoosel === item.name,
                  })}
                  key={index}
                  onClick={() => handleChooselSize(item.name)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        )}

        {sizeChoosel && (
          <div className={btnClear} onClick={() => handleClearSize()}>
            Clear
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
          <div style={{ color: "#888" }} className={textCenter}>
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
          <div className={cls(boxBtn, { [leftBtn]: !isShowGrid })}>
            <Button content="ADD TO CART" onClick={handleAddToCart} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
