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
import MyFooter from "@components/Footer/Footer";

function HomePage() {
  const { container } = styles;
  const [listProduct, setLisProducts] = useState([]);

  useEffect(() => {

    const query = {
      sortType: 0,
      page: 1,
      limit: 10
    }

    getProducts(query).then((res) => {
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
        <MyFooter/>
      </div>
    </div>
  );
}

export default HomePage;
