import React, { Component } from "react";

export default class Student extends Component {
  render() {
    const { name, height, mass } = this.props;
    return (
      <ul className="Students">
        <li key="name">name: {name}</li>
        <li key="mass">mass: {mass}</li>
        <li key="height">height: {height}</li>
      </ul>
    );
  }
}
