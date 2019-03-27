import React, { Component } from "react";

export default class PotterStudentFullInfo extends Component {
  render() {
    let {name:firstName,data } = this.props;
   
    let oneEl = data.filter(item => item.name==={firstName}); ///Тут не правильно фильтрует
    console.log(oneEl);
    const {house, role, school} = oneEl[0];

    return (
      <ul className={firstName}>
        <li key="name">name:{firstName}</li>
        <li key="house">house: {house}</li>
        <li key="school">school: {school}</li>
        <li key="role">role: {role}</li>
      </ul>
    );
  }
}
