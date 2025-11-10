import CountdownTimer from "@components/CoutdownTimer/CoutdownTimer";
import Mainlayout from "@components/Layout/Layout";
import styles from "./style.module.scss";
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";
import ProductItem from "@components/ProductItem/ProductItem";

function HeadingListProduct({ data }) {
  const { container, containerItem } = styles;
  const targetDate = "2025-12-31T00:00:00";


  return (
    <Mainlayout>
      {/* <CountdownTimer targetDate={targetDate}/> */}
      <div className={container}>
        <CountdownBanner />
        <div className={containerItem}>
          {data.map((item) => (
            <ProductItem
              key={item.id}
              src={item.images[0]}
              prevSrc={item.images[1]}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </Mainlayout>
  );
}

export default HeadingListProduct;
