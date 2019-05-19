import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignupSchema } from "./schema";
import style from "./form.module.scss";

import { People } from "../index";
import { loading, load, notLoaded } from "../../modules/peoples/actions";
import { loadData } from "../../modules/peoples/AsyncPeopleActions";
import { connect } from "react-redux";

const mapState = state => state.peopleList;
const mapDispatch = dispatch => ({
  loading: () => dispatch(loading()),
  load: () => dispatch(load()),
  notLoaded: () => dispatch(notLoaded()),
  loadData: () => dispatch(loadData())
});

export class FormikForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  async componentDidMount() {
    this.props.loadData();
  }

  handleSubmit = values => {
    console.log("RRs", values);
    fetch("http://localhost:3004/profile", {
      method: "post",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        email: values.email,
        password: values.password,
        "First Name": values.firstName,
        "Last Name": values.lastName,
        age: values.age
      })
    });
    this.setState({
      data: {
        email: values.email,
        password: values.password,
        name: values.firstName,
        secondName: values.lastName,
        age: values.age,
        id: -1
      }
    });
    console.log("DDDD", this.state);
  };

  render() {
    return (
      <section>
        <div className={style.form}>
          <div className={style.h1}>
            <h1>Signup</h1>
          </div>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              age: "",
              email: "",
              password: ""
            }}
            validationSchema={SignupSchema}
            onSubmit={this.handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <Field
                  className={`${
                    errors.firstName && touched.firstName
                      ? `${style.error}`
                      : ""
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
                  className={`${
                    errors.age && touched.age ? `${style.error}` : ""
                  }`}
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
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
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

        <div>
          {this.state.data != null ? (
            <People {...this.state.data} key="Fake" />
          ) : null}
          {this.props.list.map((
            people //this.props.list.
          ) => (
            <People {...people} key={people.id} />
          ))}
        </div>
      </section>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(FormikForm);
