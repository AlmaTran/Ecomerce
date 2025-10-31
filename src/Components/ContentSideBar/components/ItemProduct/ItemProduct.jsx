import styles from "./style.module.scss";
import { IoMdClose } from "react-icons/io";

function ItemProduct() {
  const { container, boxContent,title,price,boxClose,size } = styles;
  return (
    <div className={container}>
      <img
        src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-14.1-min-285x340.jpg"
        alt=""
      />
      <div className={boxClose}>
        <IoMdClose style={{fontSize:'17px'}} />
      </div>
      <div className={boxContent}>
        <div className={title}>Title of product</div>
        <div className={size}>Size:M</div>
        <div className={price}>$119.99</div>
        <div>SKU: 12345</div>
      </div>
    </div>
  );
}

export default ItemProduct;
