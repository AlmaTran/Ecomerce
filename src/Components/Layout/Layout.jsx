import styles from './styles.module.scss'


function Mainlayout({children}) {

    const {wrapLayout, container} = styles;

    return (
        <main className={wrapLayout}>
            <div className={container}>{children}</div>
        </main>
    );
      
}

export default Mainlayout;