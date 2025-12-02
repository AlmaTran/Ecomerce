import { createContext, useMemo, useState } from "react";
import { getCart } from "@/apis/cartService";
// import Cookies from "js-cookie";

export const SideBarContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  type: null,
  setType: () => {},
});

export const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState(null); // hoặc 'cart'/'wishlist' tùy bạn
  const [listProductCart, setListProductCart] = useState([])

  // const userId = Cookies.get('userId');



  const handleGetListProduct = (userId,type) => {
   if(userId && type === 'cart'){
    getCart(userId)
      .then((res) => {
          setListProductCart(res.data.data)
      })
      .catch((res) => {
        setListProductCart([])
      })
   }
  }

  const value = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      type,
      setType,
      listProductCart,
      handleGetListProduct,
    }),
    [isOpen, type, listProductCart] // nhớ thêm dependency
  );

  return (
    <SideBarContext.Provider value={value}>
      {children}
    </SideBarContext.Provider>
  );
};
