import { CgMenuGridO } from "react-icons/cg";
import { CiCircleList } from "react-icons/ci";
import styles from "../style.module.scss";
import cls from "classnames";
import { useContext } from "react";
import { OurShopContext } from "@/contexts/OurShopProvider";
import SelectBox from "@/pages/OurShop/components/SelectBox";

function Filter() {
  const { containerFilter, boxIcon, boxLeft, selectBox, boxRight, show, sort } =
    styles;
  const { showOptions, sortOptions, setSortId, setShowId, setIsShowGrid } =
    useContext(OurShopContext);

  const getValueSelect = (value,type) => {
  
    if(type === 'sort') {
        setSortId(value)
    }else {
        setShowId(value);
    }
  };

  const handleShowGrid = (type) => {
    if(type === 'grid') {
        setIsShowGrid(true)
    }else {
        setIsShowGrid(false)
    }

  }

  return (
    <div className={containerFilter}>
      <div className={boxLeft}>
        {/* <div className={cls(selectBox, sort)}> */}
        <SelectBox options={sortOptions} getValue={getValueSelect} type='sort' />
        {/* </div> */}

        <div className={boxIcon}>
          <CgMenuGridO style={{ fontSize: "30px", cursor: "pointer" }}
          onClick={() => handleShowGrid('grid')}
          />
          <div
            style={{
              height: "26px",
              width: "1px",
              backgroundColor: "black",
            }}
          />
          <CiCircleList style={{ fontSize: "30px", cursor: "pointer" }}
          onClick={() => handleShowGrid('list')}
          
          />
        </div>
      </div>
      <div className={boxRight}>
        <div>Show</div>
        <SelectBox options={showOptions} getValue={getValueSelect} type= 'show'/>
      </div>
    </div>
  );
}

export default Filter;
