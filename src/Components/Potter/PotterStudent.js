import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class PotterStudent extends Component {
  render() {
    const { name, house, change, _id: id } = this.props;

    return (
      <Link to={`/people/${id}`}>
      <ul
        className={name}
      
        >
        <li key="name">name: {name}</li>
        <li key="house">house: {house}</li>
      </ul>
      </Link>
    )
  }
}





/*
import React, { Component } from "react";
import {withRouter} from 'react-router'

export default withRouter(class PotterStudent extends Component {
  render() {
    const { name, house, change, _id: id } = this.props;

    return (
      
      <ul
        className={name}
        onClick={() => {
          this.props.history.push(`people/${id}`)
        }}>
        <li key="name">name: {name}</li>
        <li key="house">house: {house}</li>
      </ul>
    )
  }
})
*/
