import React, { Component } from "react";

export default class PotterStudent extends Component {
  render() {
    const { name, house, data, change, id } = this.props;
    return (
      <ul
        className={name}
        onClick={() => {
          change(id);
        }}
      >
        <li key="name">name: {name}</li>
        <li key="house">house: {house}</li>
      </ul>
    );
  }
}
