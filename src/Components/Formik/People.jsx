import React, { Component } from "react";
import style from "./form.module.scss";

export default class People extends Component {
  render() {
    const { id, 'Last Name':secondName, 'First Name':name, age } = this.props;

    return (
     // <Link to={`/people/${id}`}>
      <ul className={id===-1? style.loading: style.card}>
        <li key="id">id: {id}</li>
        <li key="name">First Name: {name}</li>
        <li key="secondName">Last Name: {secondName}</li>
        <li key="age">Age: {age}</li>
        </ul>
    //  </Link>
    )
  }
}

