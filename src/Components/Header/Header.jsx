import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constant";
import Menu from "./Menu/Menu";
import styles from "./style.module.scss";
import Logo from "@icons/svgs/images/thuan1.png";
import reloadicon from "@icons/svgs/reloadicon.svg";
import hearticon from "@icons/svgs/hearticon.svg";
import carticon from "@icons/svgs/carticon.svg";

function MyHeader() {
  const { containerBoxIcon, containerMenu, containerHeader, containerBox,container } =
    styles;

  return (
    <div className={container}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item) => (
              <BoxIcon key={item.type} type={item.type} href={item.href} />
            ))}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
        </div>
        <div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                // fontStyle: "italic",
                fontWeight: 600,
                fontFamily: "'Playfair Display', serif",
                color: "#444",
                letterSpacing: "0.5px",
                textShadow: "0 1px 3px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0078ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              DUCTHUAN
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "14px",
                fontWeight: 400,
                color: "#888", // chữ nhạt hơn
                marginTop: "4px",
                letterSpacing: "0.3px",
                transition: "color 0.3s ease",
              }}
            >
              TR Shop
            </div>
          </div>
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, 6).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
          <div className={containerBoxIcon}>
            <img width={26} height={26} src={reloadicon} alt="" />
            <img width={26} height={26} src={hearticon} alt="" />
            <img width={26} height={26} src={carticon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
