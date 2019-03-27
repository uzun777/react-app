import React, { Component } from "react";
import PotterStudent from "../Potter/PotterStudent";
import PotterStudentFullInfo from "./PotterStudentFullInfo";

export default class PotterStudentList extends Component {
  render() {
    const { change, id, data } = this.props;
    let PotterStudentElements = this.props.data.map(student => (
      <PotterStudent {...student} key={student._id} change={change} />
    ));
       
    return id === null ? (
      <ul className="PotterStudentElements">{PotterStudentElements}</ul>
    ) : (
      <PotterStudentFullInfo data={data} id={id} />
    );
  }
}
