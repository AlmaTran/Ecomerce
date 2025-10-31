import { PiShoppingCartLight } from "react-icons/pi";
import styles from "./style.module.scss";
import HeaderSideBar from "@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar";
import ItemProduct from "@components/ContentSideBar/components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";

function Cart() {
  const { container,total,boxBtn } = styles;
  return (
    <div className={container}>
      <div>
        <HeaderSideBar
          icon={<PiShoppingCartLight style={{ fontSize: "30px" }} />}
          title={"CART"}
        />
        <ItemProduct />
      </div>
      <div>
        <div className={total}>
          <p>SUBTOTAL</p>
          <p>$199.99</p>
        </div>
        <div className={boxBtn}>
          <Button content={'VIEW CART'}/>
          <Button content={'CHECK OUT'} isPrimary={false}/>
        
        </div>
      </div>
    </div>
  );
}

export default Cart;
