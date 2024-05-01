import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import styles from "../../../Styles/Login.module.css";
import { Link } from "react-router-dom";
import logo from "/Images/logo.svg";
import axios from "axios";
import * as Yup from "yup";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space, message } from "antd";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Login successful",
    });
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/creator/login",
        values,{withCredentials: true}
      );
      // If login is successful, save user email and login status in local storage
      localStorage.setItem('userEmail', values.email);
      localStorage.setItem('isLoggedIn', true);
      
      success();
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Login failed:", error);
      messageApi.error({
        content: "Login failed. Please check your credentials.",
      });
    }
    setSubmitting(false);
  };

  useEffect(() => {
    // Check local storage for login status
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home', { state: { log: isLoggedIn } });
    }
  }, [isLoggedIn]);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h2 className={styles.text}> Log in to Access Your Profile</h2>
      </div>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className={styles.formcontainer} onSubmit={handleSubmit}>
            <div className={styles.inputcontainer}>
              <Input
                className={styles.input}
                placeholder="Enter your email address"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className={styles.errors}>
                {errors.email && touched.email && errors.email}
              </span>
              <Input.Password
                className={styles.input}
                placeholder="Enter your password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </div>
            <Link
              to="/auth/reset-password"
              style={{
                textDecoration: "none",
                fontSize: "15px",
                color: "#0EA89BFF",
                textAlign: "left",
              }}
            >
              <span>Forgot password? </span>
            </Link>
            {errors.password && touched.password && errors.password}
            {contextHolder}
            <Button
              disabled={isSubmitting}
              className={styles.submitButton}
              htmlType="submit"
            >
              Login 
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
