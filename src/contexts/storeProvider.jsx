import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getInfo } from "@/apis/authService";


export const StoreContext = createContext();

export const StoreProvider = ({children}) => {

    const [userInfo, setUserInfo] = useState(null)
    const [userId, setUserId] = useState(Cookies.get('userId'))

    // const userId = Cookies.get('userId');

      const handleLogOut = () => {
      Cookies.remove('token');
      Cookies.remove('refreshToken');
      Cookies.remove('userId');
    //   setIsShowMenu(false)
      window.location.reload()
     }
    
    // console.log(userId)s

    useEffect(() => {
        // call api info
        if(userId) {
            getInfo(userId).then((res) => {
                setUserInfo(res.data.data)
            }).catch((err) => {
                console.log(err)
            })
        }
        // console.log(userInfo)
    },[userId])

    return (
        <StoreContext.Provider value={{userInfo, handleLogOut, setUserId}}>
                    {children}
        </StoreContext.Provider>
    )
}