import React, { Component } from "react";

export default class PotterStudentFullInfo extends Component {
  render() {

    // let idFromUrl = this.props.match.params.idFromUrl;
    let idFromUrl = this.props.match.params.idFromUrl;
    console.log("id from url", idFromUrl)

    let { data, id } = this.props;
    let oneEl = data.filter(item => item._id === id); ///Тут не правильно фильтрует
    const { name, house, role, school } = oneEl[0];

    return (
      <ul className={name}>
        <li key="name">name:{name}</li>
        <li key="house">house: {house}</li>
        <li key="school">school: {school}</li>
        <li key="role">role: {role}</li>
      </ul>
    );
  }
}
