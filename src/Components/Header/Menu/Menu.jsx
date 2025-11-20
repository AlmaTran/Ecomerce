import { useContext, useState } from "react";
import styles from "../style.module.scss"; // sửa lại
import { SideBarContext } from "@/contexts/SideBarProvider";
import { StoreContext } from "@/contexts/storeProvider";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Menu({ content, href }) {
  const { menu, subMenu } = styles;
  const { setIsOpen, setType } = useContext(SideBarContext);
  const { userInfo, handleLogOut } = useContext(StoreContext);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const navigate = useNavigate()


  const handleClickShowLogin = () => {
    if (content === "Sign in" && !userInfo) {
      setIsOpen(true);
      setType("login");
    }
    if(content === 'Our Shop') {
        navigate('/shop')
    }
  };

  const handleRenderText = () => {
    if (content === "Sign in" && userInfo) {
      return `Hello: ${userInfo?.username}`;
    } else {
      return content;
    }
  };
  const handleHover = () => {
    if (content === "Sign in" && userInfo) {
      setIsShowMenu(true);
    }
  };

  return (
    <div
      className={menu}
      onMouseEnter={handleHover}
      onClick={handleClickShowLogin}
    >
      {handleRenderText(content)}

      {isShowMenu && (
        <div className={subMenu} onMouseLeave={() => setIsShowMenu(false)} onClick={handleLogOut}>
          LOG OUT
        </div>
      )}
    </div>
  );
}

export default Menu;
