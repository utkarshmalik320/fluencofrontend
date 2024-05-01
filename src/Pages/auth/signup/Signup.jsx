import React from "react";
import { Formik ,Form, Field, useFormik} from "formik";
import * as Yup from "yup";
import styles from "../../../Styles/Signup.module.css";
import { Link } from "react-router-dom";
import logo from "/Images/logo.svg";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input,Space, Tooltip, Select,message, Checkbox, notification, Avatar } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from 'react-router-dom';




const Login = () => {
  const categories = ["Fashion", "Skincare", "Heath", "Wellness","Travel","Food","Tech","Vlog"];
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Created Account successful',
    });
  };

  const codeCopied = () => {
    message.success("Link Copied Successfully");
  };

  const categoryOptions = categories.map((category, key) => (
    <option value={category} key={key}>
      {category}
    </option>
  ));

  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      category: '',
      instagramLink: '',
      youtubeLink: '',
      password: '',
      avatar: '' // Add avatar field to initialValues
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      username: Yup.string().required("Username is required"),
      email: Yup.string().email().required("Email is required"),
      category: Yup.string().required("category is required"),
      password: Yup.string().min(4).max(10).required("Password is required"),
      instagramLink: Yup.string().url("Invalid URL"),
      youtubeLink: Yup.string().url("Invalid URL"),
      avatar: Yup.string().url("Avatar Name is required") // Add validation for avatar field
    }),
    onSubmit: async ({ name, username, email, category, instagramLink, youtubeLink, password, avatar }) => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/creator/signup",
          {
            name,
            username,
            email,
            category,
            instagramLink,
            youtubeLink,
            password,
            avatar // Include avatar field in the request body
          },
          { withCredentials: true }
        );
        if (response.status === 200) {
          notification.success({ message: "Signed up successfully!" });
          success();
          formik.resetForm();
          navigate('/login');
        }
      } catch (error) {
        console.error(error);
        notification.error({ message: "Error Signing Up" });
      }
    },
  });
 


  return (
    <div className={styles.container}>
        <div className={styles.img}>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h2 className={styles.text}>Lets Create your Account</h2>
        </div>
        <Formik>

          <Form
           onSubmit={formik.handleSubmit}
            className={styles.formcontainer}>
            <div>
            <Field
            className={styles.input}
            id="name"
            name="name"
            placeholder="Enter Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null
            }
          </div>

          <div>
            <Field
            className={styles.input}
            id="username"
            name="username"
            placeholder="Enter Username"
            onChange={formik.handleChange}
            value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null
            }
          </div>

          <div>
            <Field
            className={styles.input}
            id="email"
            name="email"
            placeholder="Enter Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null
            }
          </div>

          <div>
          {/* <Field
          className={styles.input}
            id="category"
            name="category"
            placeholder="Enter Category"
            onChange={formik.handleChange}
            value={formik.values.category}
            />
            {formik.touched.category && formik.errors.category ? (
              <div>{formik.errors.category}</div>
            ) : null
            } */}

            <Field
                  as="select"
                  id="category"
                  name="category"
                  placeholder="Select category"
                  onChange={formik.handleChange}
                  value={formik.values.category}
                  style={{
                  height: '5vh',
                  width:'400px'
                        }}
                  >
                    <option value={""}>Select a Category</option>
                {categoryOptions}
                    </Field>
                  {formik.touched.category && formik.errors.category ? (
              <div>{formik.errors.category}</div>
            ) : null
            }
          </div>


            <Space.Compact block>
          <Field
            className={styles.input}

            id="instagramLink"
            name="instagramLink"
            placeholder="Enter Instagram Link"
            onChange={formik.handleChange}
            value={formik.values.instagramLink}
            />
            {formik.touched.instagramLink && formik.errors.instagramLink ? (
              <div>{formik.errors.instagramLink}</div>
            ) : null
            }
            <Tooltip title="Copy Link">
                <Button
                  onClick={codeCopied}
                  icon={<CopyOutlined />}
                  style={{ height: "52px", width: "40px" }}
                />
              </Tooltip>
              </Space.Compact>


              <div>
              <Space.Compact block>

          <Field
          className={styles.input}
            id="youtubeLink"
            name="youtubeLink"
            placeholder="Enter Youtube Link"
            onChange={formik.handleChange}
            value={formik.values.youtubeLink}
            />
            {formik.touched.youtubeLink && formik.errors.youtubeLink ? (
              <div>{formik.errors.youtubeLink}</div>
            ) : null
            }
             <Tooltip title="Copy Link">
                <Button
                  onClick={codeCopied}
                  icon={<CopyOutlined />}
                  style={{ height: "52px", width: "40px" }}
                />
              </Tooltip>
              </Space.Compact>
          </div>



              <div>
          <Field
          className={styles.input}
            id="password"
            name="password"
            placeholder="Enter Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null
            }
          </div>

           


            <div className={styles.Checkboxdiv}>
            <Checkbox>
              <p variant="body2" align="start">
                Terms and Conditions
              </p>
            </Checkbox>
            <Checkbox>
              <p variant="body2" align="start">
                Keep me signed in
              </p>
            </Checkbox>
            </div>
            {contextHolder}
             <Button
              className={styles.submitButton}  htmlType="submit">
                 Sign Up
                 </Button>
          </Form>
        </Formik>
    </div>
  );
};

export default Login;
