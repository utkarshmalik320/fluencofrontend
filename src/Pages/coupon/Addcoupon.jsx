import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { notification, Button, message, Space } from "antd";
import { useFormik } from "formik";
import axios from "axios";
import logo from "/Images/logo.svg";
import styles from "../../Styles/Signup.module.css";

const AddCoupon = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Coupon added successfully",
    });
  };

  const formik = useFormik({
    initialValues: {
      couponCode: "",
      brandName: "",
      category: "",
      websiteLink: "",
      termsCondition: "",
      expiry: "",
    },
    validationSchema: Yup.object({
      couponCode: Yup.string().required("Coupon code is required"),
      brandName: Yup.string().required("Brand name is required"),
      category: Yup.string().required("Category is required"),
      websiteLink: Yup.string()
        .required("Website link is required")
        .url("Invalid URL"),
    }),
    onSubmit: async ({ couponCode, brandName, category, websiteLink, termsCondition, expiry }) => {
      try {
        // Make a POST request to the API endpoint
        console.log({ couponCode, brandName, category, websiteLink, termsCondition, expiry });
        const response = await axios.post(
          "http://localhost:3000/api/coupon/add",
          {
            couponCode,
            brandName,
            category,
            websiteLink,
            termsCondition,
            expiry,
          }
        );
         
        if (response.status === 200) {
          notification.success({ message: "Coupon added successfully!" });
          formik.resetForm();
        } 
      } catch (error) {
        console.error("Error adding coupon:", error);

        notification.error({
          message: "Coupon already Exists!",
        });
      }
    },
  });

  return (
    <div
    className={styles.container}
    >
              <div className={styles.img}>

      <img  src={logo} alt="logo" />
      </div>

      <h2 className={styles.text}>Add Coupon</h2>
      <Formik>
        <Form onSubmit={formik.handleSubmit}
         className={styles.formcontainer}>
          
          <div >
            <Field
            className={styles.input}
              id="couponCode"
              name="couponCode"
              placeholder="Coupon Code"
              onChange={formik.handleChange}
              value={formik.values.couponCode}
            />
            {formik.touched.couponCode && formik.errors.couponCode ? (
              <div>{formik.errors.couponCode}</div>
            ) : null}
          </div>
          <div>
            <Field
            className={styles.input}
              id="brandName"
              name="brandName"
              placeholder="Brand Name"
              onChange={formik.handleChange}
              value={formik.values.brandName}
            />
            {formik.touched.brandName && formik.errors.brandName ? (
              <div>{formik.errors.brandName}</div>
            ) : null}
          </div>
          <div>
            <Field
            className={styles.input}
              id="category"
              name="category"
              placeholder="Category"
              onChange={formik.handleChange}
              value={formik.values.category}
            />
            {formik.touched.category && formik.errors.category ? (
              <div>{formik.errors.category}</div>
            ) : null}
          </div>
          <div>
            <Field
            className={styles.input}
              id="termsCondition"
              name="termsCondition"
              placeholder="Terms and Conditions"
              onChange={formik.handleChange}
              value={formik.values.termsCondition}
            />
            {formik.touched.termsCondition &&
            formik.errors.termsCondition ? (
              <div>{formik.errors.termsCondition}</div>
            ) : null}
          </div>
          <div>
            <Field
            className={styles.input}
              id="expriy"
              name="expiry"
              placeholder="Valid Till"
              onChange={formik.handleChange}
              value={formik.values.expiry}
            />
            {formik.touched.expiry && formik.errors.expiry ? (
              <div>{formik.errors.expiry}</div>
            ) : null}
          </div>
          <div>
            <Field
            className={styles.input}
              id="websiteLink"
              name="websiteLink"
              placeholder="Website Link"
              onChange={formik.handleChange}
              value={formik.values.websiteLink}
            />
            {formik.touched.websiteLink && formik.errors.websiteLink ? (
              <div>{formik.errors.websiteLink}</div>
            ) : null}
          </div>
          {contextHolder}
          <Button className={styles.submitButton} onClick={success} htmlType="submit">Add Coupon</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddCoupon;
