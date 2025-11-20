import MyHeader from "@components/Header/Header";
import Mainlayout from "@components/Layout/Layout";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import Banner from "@/pages/OurShop/components/Banner";
import { OurShopProvider } from "@/contexts/OurShopProvider";
import { useContext } from "react";
import { OurShopContext } from "@/contexts/OurShopProvider";
import Filter from "@/pages/OurShop/components/Filter";

function OurShop() {
  const { container, functionBox, shop, back } = styles;
  const navigate = useNavigate();
  // const a = useContext(OurShopContext)

  // console.log(a)
  const handleBackPreviousPage = () => {
    navigate(-1);
  };

  return (
    <OurShopProvider>
      <MyHeader />
      <Mainlayout>
        <div className={container}>
          <div className={functionBox}>
            <div>
              Home &gt; <span className={shop}>Shop</span>
            </div>
            <div className={back} onClick={() => handleBackPreviousPage()}>
              &lt; Return to previous page
            </div>
          </div>
        </div>
        <Banner />
        <div>
          <Filter/>
        </div>
      </Mainlayout>
    </OurShopProvider>
  );
}

export default OurShop;
