import { dataInfo } from "@components/Info/constants";
import InfoCard from "@components/Info/InfoCard/InfoCard";
import Mainlayout from "@components/Layout/Layout";
import styles from "./style.module.scss";

function Info() {
  const { container } = styles;
  return (
    <div>
      <Mainlayout>
        <div className={container}>
          {dataInfo.map((item, index) => (
            <InfoCard
              key={index}
              title={item.title}
              description={item.description}
              src={item.src}
            />
          ))}
        </div>
      </Mainlayout>
    </div>
  );
}

export default Info;
