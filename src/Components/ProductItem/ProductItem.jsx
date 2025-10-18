import styles from "./style.module.scss";
import reloadicon from "@icons/svgs/reloadicon.svg";
import hearticon from "@icons/svgs/hearticon.svg";
import carticon from "@icons/svgs/carticon.svg";
import truckicon from "@icons/svgs/truckicon.svg";

function ProductItem({
    src,
    prevSrc,
    name,
    price
}) {
  const { boxImg,showImageWhenHover, showFnWhenHover,boxIcon,title,prices } = styles;
  return (
    <div>
      <div className={boxImg}>
        <img
          src={src}
        />
        <img
         src={prevSrc} className={showImageWhenHover}
        />

        <div className={showFnWhenHover}>
            <div className={boxIcon}>
                <img src={carticon} alt="" />
            </div>
            <div className={boxIcon}>
                <img src={hearticon} alt="" />
            </div>
            <div className={boxIcon}>
                <img src={reloadicon} alt="" />
            </div>
            <div className={boxIcon}>
                <img src={truckicon} alt="" />
            </div>
        </div>
      </div>
      <div className={title}>{name}</div>
      <div className={prices}>{price}</div>
    </div>
  );
}

export default ProductItem;
