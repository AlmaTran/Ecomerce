import Mainlayout from "@components/Layout/Layout";
import { useContext } from "react";
import { OurShopContext } from "@/contexts/OurShopProvider";
import ProductItem from "@components/ProductItem/ProductItem";
import styles from '../style.module.scss'

function ListProducts() {

  const {containerProduct} = styles

  const { products,isShowGrid } = useContext(OurShopContext);
  // console.log(products)
  return (
    <>
      <Mainlayout>
        <div className={ isShowGrid ? containerProduct : '' }>
          {products.map((item) => (
            <ProductItem
              key={item.id}
              src={item.images[0]}
              prevSrc={item.images[1]}
              name={item.name}
              price={item.price}
              details={item}
              isHomepage={false}
            />
          ))}
        </div>
      </Mainlayout>
    </>
  );
}

export default ListProducts;
