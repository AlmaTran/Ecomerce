import styles from '../style.module.scss'; // sửa lại

function Menu({ content, href, setIsOpen }) {
  const { menu } = styles;
  return <div className={menu} onClick={() => setIsOpen(true)}>{content}</div>;
}

export default Menu;
