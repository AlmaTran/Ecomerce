import styles from "../style.module.scss";
import truckicon from "@icons/svgs/truckicon.svg";

function InfoCard({content, description, src}) {
  const { containerCard, containerContent, title, des, boxIcon } = styles;
  return (
    <div className={containerCard}>
        <div className={boxIcon}>
             <img width={40} height={41} src={src} alt="" />
        </div>

      <div className={containerContent}>
        <div className={title}>{title}</div>
        <div className={des}>{description}</div>
      </div>
    </div>
  );
}

export default InfoCard;
