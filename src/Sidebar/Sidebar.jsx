import { useContext } from "react";
import styles from "./style.module.scss";
import { SideBarContext } from "@/contexts/SideBarProvider";
import classNames from "classnames";
import { IoMdClose } from "react-icons/io";
import Login from "@components/ContentSideBar/Login/Login";

function SideBar() {
  const { container, overlay, Bar, slideSideBar, boxIcon } = styles;
  const { isOpen, setIsOpen, type } = useContext(SideBarContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleRenderContent = () => {
    switch (type) {
      case 'login':
            return <Login/>
      case 'compare':
            return 'Compare'
      case 'wishlist': 
            return 'Wishlist'
      case 'cart':
            return 'Cart'
    
      default:
        return <Login/>
    }
  }

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
          {handleRenderContent()}
      </div>
    </div>
  );
}

export default SideBar;
