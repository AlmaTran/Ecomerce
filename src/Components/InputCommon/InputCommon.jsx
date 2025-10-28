import styles from './Style.module.scss'

function InputCommon() {
    const {labelInput,boxInput, container} = styles
    return ( 
        <div className={container}>
            <div className={labelInput}>Username or email</div>
            <div className={boxInput}>
                <input type="text" />
            </div>
        </div>
    );
}

export default InputCommon;