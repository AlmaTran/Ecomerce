import { useContext } from "react";
import styles from "./style.module.scss";
import { SideBarContext } from "@/contexts/SideBarProvider";
import classNames from "classnames";
import { IoMdClose } from "react-icons/io";
import Login from "@components/ContentSideBar/Login/Login";

function SideBar() {
  const { container, overlay, Bar, slideSideBar, boxIcon } = styles;
  const { isOpen, setIsOpen } = useContext(SideBarContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={container}>
      <div
        className={classNames({
          [overlay]: isOpen,
        })}
        onClick={handleToggle}
      />
      <div
        className={classNames(Bar, {
          [slideSideBar]: isOpen,
        })}
      >
         {isOpen && <div className={boxIcon} onClick={handleToggle}>
             <IoMdClose />
        </div>}
        <Login/>
      </div>
    </div>
  );
}

export default SideBar;
