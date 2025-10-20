import Banner from "@components/Banner/Banner";
import MyHeader from "@components/Header/Header";
import styles from './style.module.scss';
import AdvanceHeading from "@components/AdvanceHeading/advanceHeading";
import Info from "@components/Info/Info";
import HeadingListProduct from "@components/HeadingListProduct/HeadingListProduct";
import { useEffect, useState } from "react";
import { getProducts } from "@/apis/productService";
import SaleHomepage from "@components/SaleHomepage/SaleHompage";
import PopularProduct from "@components/PopularProduct/PopularProduct";

function HomePage() {
  const { container } = styles;
  const [listProduct, setLisProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setLisProducts(res.contents); // gán kết quả API vào state
    });
  }, []); // <- đặt ở đây
  

  return (
    <div>
      <div className={container}>
        <MyHeader />
        <Banner />
        <Info />
        <AdvanceHeading />
        <HeadingListProduct data={listProduct.slice(0,2)} />
        <PopularProduct data={listProduct.slice(2, 14)} />
        <SaleHomepage />
        <div style={{ height: '799px' }}></div>
      </div>
    </div>
  );
}

export default HomePage;
