import styles from '../style.module.scss'; // sửa lại

function Menu({ content, href }) {
  const { Menu } = styles;
  return <div className={Menu}>{content}</div>;
}

export default Menu;
