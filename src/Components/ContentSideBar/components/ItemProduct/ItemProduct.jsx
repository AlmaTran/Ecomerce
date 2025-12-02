import styles from "./style.module.scss";
import { IoMdClose } from "react-icons/io";

function ItemProduct({
  src,
  nameProduct,
  priceProduct,
  skuProduct,
  sizeProduct,
  quantity
}) {
  const { container, boxContent,title,price,boxClose,size } = styles;
  return (
    <div className={container}>
      <img
        src={src}
      />
      <div className={boxClose}>
        <IoMdClose style={{fontSize:'17px'}} />
      </div>
      <div className={boxContent}>
        <div className={title}>{nameProduct}</div>
        <div className={size}>Size: {sizeProduct}</div>
        <div className={price}> {quantity} x {priceProduct}</div>
        <div className={price}>SKU: {skuProduct}</div>
      </div>
    </div>
  );
}

export default ItemProduct;
