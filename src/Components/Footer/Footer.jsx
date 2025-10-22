import { dataMenu } from '@components/Footer/constant';
import styles from './style.module.scss'

function MyFooter() {

    const {container, boxNav} = styles;
    return (
        <div className={container}>
             <div
              style={{
                // fontStyle: "italic",
                fontWeight: 600,
                fontFamily: "'Playfair Display', serif",
                color: "#f3eeee",
                letterSpacing: "0.5px",
                textShadow: "0 1px 3px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
              }}
            >
              DUCTHUAN
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "14px",
                fontWeight: 400,
                color: "#fcf5f5", // chữ nhạt hơn
                marginBottom: "1px",
                letterSpacing: "0.3px",
                transition: "color 0.3s ease",
              }}
            >
              TR Shop
            </div>

            <div className={boxNav}>
              {dataMenu.map((item) => (
                  <div>{item.content}</div>
              ))}
            </div>

            <div>
              <p style={{
                textAlign: 'center'
              }}>Guaranteed safe ckeckout</p>
              <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png" alt="" />
            </div>
            <div style={{
              marginTop: '20px'
            }}>
              Copyright © 2025 TR-Shop. Created by DUCTHUAN.
            </div>
        </div>
    )
}

export default MyFooter;