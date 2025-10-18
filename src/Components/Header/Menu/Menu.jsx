import styles from '../style.module.scss'; // sửa lại

function Menu({ content, href }) {
  const { menu } = styles;
  return <div className={menu}>{content}</div>;
}

export default Menu;
