import { dataInfo } from "@components/Info/constants";
import InfoCard from "@components/Info/InfoCard/InfoCard";
import Mainlayout from "@components/Layout/Layout";
import styles from './style.module.scss';

function Info() {

  const {container} = styles;
  return (
    <div>
        <Mainlayout>
            <div className={container}>
                  {dataInfo.map((item) => {
                    return <InfoCard content={item.content} description={item.description} src={item.src}/>
                  })}
            </div>
        </Mainlayout>
    </div>
  )
}

export default Info;
