import React, { Component } from "react";

export default class Student extends Component {
  render() {
    const { Name, Age, Photo } = this.props;
    return (
      <ul className="Students">
        <li  key="Photo">
          <img src={Photo} alt={Name} width="100" height="100" />
        </li>
        <li key="Name">Фио: {Name}</li>
        <li key="Age">Возраст: {Age}</li>
      </ul>
    );
  }
}
