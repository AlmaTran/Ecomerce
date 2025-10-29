import { createContext, useMemo, useState } from "react";

export const SideBarContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  type: null,
  setType: () => {},
});

export const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState(null); // hoặc 'cart'/'wishlist' tùy bạn

  const value = useMemo(() => ({ isOpen, setIsOpen, type, setType }), [isOpen, type]);

  return (
    <SideBarContext.Provider value={value}>
      {children}
    </SideBarContext.Provider>
  );
};
