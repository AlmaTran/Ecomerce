import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constant";
import Menu from "./Menu/Menu";
import styles from "./style.module.scss";
import { TfiReload } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";

import useCrollHandling from "@/hooks/useScrollHandling";
import { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { SideBarContext } from "@/contexts/SideBarProvider";

function MyHeader() {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    container,
    fixedHeader,
    topHeader,
    boxCart,
    quantity,
  } = styles;

  const { scrollPosition } = useCrollHandling();
  const [fixedPosition, setFixedPosition] = useState(false);

  const { setIsOpen, setType,listProductCart } = useContext(SideBarContext);

  const handleOpenSibar = (type) => {
    setIsOpen(true);
    setType(type);
  };

  useEffect(() => {
    // if (scrollPosition > 80) {
    //   setFixedPosition(true);
    // } else {
    //   setFixedPosition(false);
    // }

    setFixedPosition(scrollPosition > 85);
  }, [scrollPosition]);

  return (
    <div
      className={classNames(container, topHeader, {
        [fixedHeader]: fixedPosition,
      })}
    >
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item) => (
              <BoxIcon key={item.type} type={item.type} href={item.href} />
            ))}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
        </div>
        <div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                // fontStyle: "italic",
                fontWeight: 600,
                fontFamily: "'Playfair Display', serif",
                color: "#444",
                letterSpacing: "0.5px",
                textShadow: "0 1px 3px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0078ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              DUCTHUAN
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "14px",
                fontWeight: 400,
                color: "#888", // chữ nhạt hơn
                marginTop: "4px",
                letterSpacing: "0.3px",
                transition: "color 0.3s ease",
              }}
            >
              TR Shop
            </div>
          </div>
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, 6).map((item) => {
              return (
                <Menu
                  content={item.content}
                  href={item.href}
                  setIsOpen={setIsOpen}
                />
              );
            })}
          </div>
          <div className={containerBoxIcon}>
            <TfiReload
              style={{
                fontSize: "22px",
              }}
              onClick={() => {
                handleOpenSibar("compare");
              }}
            />
            <CiHeart
              style={{
                fontSize: "30px",
              }}
              onClick={() => {
                handleOpenSibar("wishlist");
              }}
            />
            <div className={boxCart}>
              <PiShoppingCartLight
                style={{
                  fontSize: "26px",
                  marginTop: "6x",
                }}
                onClick={() => {
                  handleOpenSibar("cart");
                }}
              />

              <div className={quantity}>{listProductCart.length}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
