import Banner from "@components/Banner/Banner";
import MyHeader from "@components/Header/Header";
import styles from './style.module.scss'
import AdvanceHeading from "@components/AdvanceHeading/advanceHeading";
import Info from "@components/Info/Info";
import HeadingListProduct from "@components/HeadingListProduct/HeadingListProduct";

function HomePage() {
    const {container} = styles;
  return (
    <div>
      <div className={container}>
        <MyHeader />
        <Banner />
        <Info/>
        <AdvanceHeading/>
        <HeadingListProduct/>
      </div>
    </div>
  );
}

export default HomePage;
