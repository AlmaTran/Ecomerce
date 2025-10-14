import styles from "../style.module.scss";
import fbicon from "@icons/svgs/fbicon.svg";
import insicon from "@icons/svgs/insicon.svg";
import ytbicon from "@icons/svgs/ytbicon.svg";

function BoxIcon({ type, href }) {
  const { boxIcon } = styles;

  const handleRenderIcon = (type) => {
    switch (type) {
        case 'fb':
            return fbicon;
        case 'ins':
            return insicon;
        case 'ytb':
            return ytbicon;
        case 'cart':
          // return carticon;
    }
  }



  return (
    <div className={boxIcon}>
      <img src={handleRenderIcon(type)} alt={type} />
      
    </div>
  );
}

export default BoxIcon;
