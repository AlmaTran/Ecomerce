import CountdownTimer from '@components/CoutdownTimer/CoutdownTimer';
import styles from '../style.module.scss'
import Button from '@components/Button/Button';
import { OurShopContext } from '@/contexts/OurShopProvider';
import { useContext } from 'react';

function Banner() {
   
  const {containerBanner,contentBox, title,boxBtn,countdownBox} = styles;   

  const targetDate = '2025-12-31T00:00:00';
   const a = useContext(OurShopContext)
  

  return (
    <>
      <div className={containerBanner}>
           <div className={contentBox}>
             <div className={countdownBox}>
                <CountdownTimer targetDate={targetDate}/>
             </div>
             <div className={title}>
                The Classsics Make A Comeback
             </div>
             <div className={boxBtn}>
                <Button content='Buy Now'/>
             </div>
           </div>
      </div>
    </>
  );
}

export default Banner;
