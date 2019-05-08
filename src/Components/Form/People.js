import React, { Component } from "react";

export default class People extends Component {
  render() {
    const { id, secondName, name, age } = this.props;

    return (
     // <Link to={`/people/${id}`}>
      <ul id="peopleCart">
        <li key="id">id: {id}</li>
        <li key="name">name: {name}</li>
        <li key="secondName">secondName: {secondName}</li>
        <li key="age">age: {age}</li>
        </ul>
    //  </Link>
    )
  }
}

