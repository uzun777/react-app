import React, { Component } from "react";

export default class PotterStudent extends Component {
  render() {
    const { name, house, role, school } = this.props;
    return (
      <ul className={name}>
        <li key="name">name: {name}</li>
        <li key="house">house: {house}</li>
        <li key="school">school: {school}</li>
        <li key="role">role: {role}</li>
      </ul>
    );
  }
}
