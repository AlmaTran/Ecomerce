import { useState } from 'react';
import styles from './Style.module.scss'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";

function InputCommon({label, type,isRequired = false}) {
    const {labelInput,boxInput, container, boxIcon} = styles
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';

    const isShowPassword = type === 'password' && showPassword ? 'text' : type
     const handleShowPassword = () => {
        setShowPassword(!showPassword)
     }
    return ( 
        <div className={container}>
            <div className={labelInput}>{label} {isRequired && <span>*</span>}</div>
            <div className={boxInput}>
                <input type={isShowPassword} />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputCommon;