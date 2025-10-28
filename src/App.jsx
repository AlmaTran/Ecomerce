import Banner from "@components/Banner/Banner";
import MyFooter from "@components/Footer/Footer";
import HomePage from "@components/HomePage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routers from "@/routers/routers";
import { Suspense } from "react";
import { SideBarProvider } from "@/contexts/SideBarProvider";
import SideBar from "@/Sidebar/Sidebar";

function App() {
  return (
    <SideBarProvider>
      <SideBar/>
      <BrowserRouter>
        <Suspense>
          <Routes>
            {routers.map((item, index) => {
              return (
                <Route
                  path={item.path}
                  element={<item.component />}
                  key={index}
                />
              );
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </SideBarProvider>
  );
}

export default App;
