import React, { Component } from "react";

export default class People extends Component {
  render() {
    const { id, 'Last Name':secondName, 'First Name':name, age } = this.props;

    return (
     // <Link to={`/people/${id}`}>
      <ul id="peopleCart">
        <li key="id">id: {id}</li>
        <li key="name">First Name: {name}</li>
        <li key="secondName">Last Name: {secondName}</li>
        <li key="age">Age: {age}</li>
        </ul>
    //  </Link>
    )
  }
}

