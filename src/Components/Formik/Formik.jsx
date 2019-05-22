import React from "react";
import { Formik, Form, Field } from "formik";
import {SignupSchema} from './schema'
import style from "./form.module.scss";



export const FormikForm = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        password: ""
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        console.log(values);
        fetch("http://localhost:3004/profile", {
          method: "post",
          headers: { "Content-Type": "application/json" },

          body: JSON.stringify({
            email: values.email,
            password: values.password,
            name: values.firstName,
            secondName: values.secondName,
            age: values.age
          })
        });
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Field
            className={`${
              errors.firstName && touched.firstName ? `${style.error}` : ""
            }`}
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field
            className={`${
              errors.lastName && touched.lastName ? `${style.error}` : ""
            }`}
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field
            className={`${errors.age && touched.age ? `${style.error}` : ""}`}
            name="age"
            type="text"
            placeholder="Age"
          />
          <Field
            className={`${
              errors.email && touched.email ? `${style.error}` : ""
            }`}
            name="email"
            type="email"
            placeholder="Email"
          />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <Field
            className={`${
              errors.password && touched.password ? `${style.error}` : ""
            }`}
            name="password"
            type="password"
            placeholder="Password"
          />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormikForm;
