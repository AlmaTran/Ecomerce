import InputCommon from "@components/InputCommon/InputCommon";
import styles from "./style.module.scss";
import Button from "@components/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";
import { ToastContext } from "@/contexts/ToastProvider";
import { register } from "@/apis/authService";
import { signIn } from "@/apis/authService";
import Cookies from "js-cookie";
import { getInfo } from "@/apis/authService";
import { SideBarContext } from "@/contexts/SideBarProvider";
import { StoreContext } from "@/contexts/storeProvider";


function Login() {
  const { container, title, boxRememberMe, button, lost } = styles;
  const [isRegister, setIsRegister] = useState(false);
  const { toast } = useContext(ToastContext);
  const [isLoaidng, setIsLoading] = useState(false);
  const {setIsOpen} = useContext(SideBarContext)
  const {setUserId} = useContext(StoreContext)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      cfmpassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: async (values) => {
      if (isLoaidng) return;

      const { email: username, password } = values;

      if (isRegister) {
        setIsLoading(true);
        await register({
          username,
          password,
        })
          .then((res) => {
            toast.success(res.data.message);
            setIsLoading(false);
            //  console.log(res)
          })
          .catch((err) => {
            toast.error(err.response.data.message);
            setIsOpen(false);
          });
      }

      if (!isRegister) {
        await signIn({
          username,
          password,
        })
          .then((res) => {
            setIsLoading(false);
            
            const {id, token, refreshToken} = res.data;
            setUserId(id)
            Cookies.set('token',token);
            Cookies.set('refreshToken',refreshToken)
            Cookies.set('userId', id)
            toast.success('Sign in successfully!')
            setIsOpen(false)

          })
          .catch((err) => {
            setIsLoading(false);
            toast.error('Sign in failed!');
          });
      }

    },
  });

  const handleToggle = () => {
    setIsRegister(!isRegister);
    formik.resetForm();
  };
 

  return (
    <div className={container}>
      <div className={title}>{isRegister ? "SIGN UP" : "SIGN IN"}</div>
      <form onSubmit={formik.handleSubmit}>
        <InputCommon
          id="email"
          label="Email"
          type="text"
          isRequired
          formik={formik}
        />

        <InputCommon
          id="password"
          label="Password"
          type="password"
          isRequired
          formik={formik}
        />

        {isRegister && (
          <InputCommon
            id="cfmpassword"
            label="Confirm password"
            type="password"
            isRequired
            formik={formik}
          />
        )}

        {!isRegister && (
          <div className={boxRememberMe}>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
        )}
        <div className={button}>
          <Button
            content={isRegister ? "REGISTER" : "LOGIN"}
            variant="primary"
            fullWidth
            type="submit"
            // onClick={() => toast.success('Success')}
          />
        </div>
      </form>
      <Button
        content={
          isRegister ? "Already have an account" : "Dont have an account"
        }
        type="submit"
        isPrimary={false}
        style={{ marginTop: "10px" }}
        onClick={handleToggle}
      />
      {!isRegister && <div className={lost}>Lost your password?</div>}
    </div>
  );
}

export default Login;
