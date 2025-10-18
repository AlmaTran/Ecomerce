import Mainlayout from "@components/Layout/Layout";
import styles from "./style.module.scss";
import ProductItem from "@components/ProductItem/ProductItem";

function PopularProduct({ data }) {
  const { container } = styles;
  return (
    <>
      <Mainlayout>
        <div className={container}>
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
      </Mainlayout>
    </>
  );
}

export default PopularProduct;
