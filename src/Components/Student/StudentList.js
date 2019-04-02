import React, { Component } from "react";
import Student from "./Student";

export default class StudentList extends Component {
  render() {
    let StudentElements = this.props.data.map(student => (
      <Student
        name={student.name}
        key={student.name}
        height={student.height}
        mass={student.mass}
      />
    ));

    return StudentElements;
  }
}
