import Mainlayout from "@components/Layout/Layout";
import styles from './style.module.scss'

function AdvanceHeading() {

    const {container,headline,containerMiddleBox,title, des} = styles;
    return <Mainlayout>
        <div className={container}> 
            <div className={headline}></div>
            <div className={containerMiddleBox}>
                <p className={des}>don't miss super offers</p>
                <p className={title}>Our best products</p>
            </div>
            <div className={headline}></div>
        </div>
    </Mainlayout>;
}

export default AdvanceHeading;