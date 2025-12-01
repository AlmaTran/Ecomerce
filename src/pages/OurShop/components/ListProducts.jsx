import Mainlayout from "@components/Layout/Layout";
import { useContext } from "react";
import { OurShopContext } from "@/contexts/OurShopProvider";
import ProductItem from "@components/ProductItem/ProductItem";
import styles from "../style.module.scss";
import Button from "@components/Button/Button";

function ListProducts() {
  const { containerProduct,sectionListProduct } = styles;

  const { products, isShowGrid, isLoading, handleLoadMore, total,isLoadMore } =
    useContext(OurShopContext);
  // console.log(products)
  return (
    <div className={sectionListProduct}>
      <Mainlayout>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <>
            <div className={isShowGrid ? containerProduct : ""}>
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
            {products.length < total && (
              <div
                style={{
                  width: "180px",
                  margin: "50px auto",
                }}
              >
                <Button
                  content={isLoadMore ? 'LOADING...' : "LOAD MORE PRODUCT"}
                  onClick={handleLoadMore}
                />
              </div>
            )}
          </>
        )}
      </Mainlayout>
    </div>
  );
}

export default ListProducts;
