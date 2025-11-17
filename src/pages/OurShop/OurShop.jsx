import MyHeader from "@components/Header/Header";
import Mainlayout from "@components/Layout/Layout";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import Banner from "@/pages/OurShop/components/Banner";

function OurShop() {
  const { container,functionBox,shop,back } = styles;
  const navigate = useNavigate();


  const handleBackPreviousPage = () => {
    navigate(-1)
  }


  return (
    <>
      <MyHeader />
      <Mainlayout>
        <div className={container}>
          <div className={functionBox}>
            <div>Home &gt; <span className={shop}>Shop</span></div>
            <div className={back} onClick={() => handleBackPreviousPage()}>&lt; Return to previous page</div>
          </div>
        </div>
        <Banner/>
      </Mainlayout>
    </>
  );
}

export default OurShop;
