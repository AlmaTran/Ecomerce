import Button from '@components/Button/Button';
import styles from './style.module.scss'

function Banner() {

    const {container,content,title, des, button} = styles;

    return ( 
        <div className={container}>
            <div className={content}>
                <h1 className={title}>TRStore Menshop Demo</h1>
                <div className={des}>
                    Make yours celebrations even more special this years with beatiful.
                </div>
                <div className={button}> <Button content={'Go to shop'}/></div>
            </div>
        </div>
     );
}

export default Banner;