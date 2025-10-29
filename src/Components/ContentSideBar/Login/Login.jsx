import InputCommon from "@components/InputCommon/InputCommon";
import styles from './style.module.scss'
import Button from "@components/Button/Button";
function Login() {

    const {container,title, boxRememberMe, button, lost} = styles;
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>
            <InputCommon label='Email' type='text' isRequired/>
            <InputCommon label='Password' type='password' isRequired/>

            <div className={boxRememberMe}>
                <input type="checkbox" />
                <span>Remember me</span>
            </div>
            <div className={button}>
                 <Button content='LOGIN' variant="primary" fullWidth/>
            </div>

            <div className={lost}>Lost your password?</div>
        </div>
    )
}

export default Login;