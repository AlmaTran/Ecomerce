import CountdownTimer from "@components/CoutdownTimer/CoutdownTimer";
import Mainlayout from "@components/Layout/Layout";
import styles from "./style.module.scss";
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";

function HeadingListProduct() {
  const { container, containerItem } = styles;
  const targetDate = "2025-12-31T00:00:00";
  return (
    <Mainlayout>
      {/* <CountdownTimer targetDate={targetDate}/> */}
      <div className={container}>
        <CountdownBanner/>
        <div className={containerItem}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default HeadingListProduct;
