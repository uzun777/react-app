import React, { Component } from "react";

export default class Link extends Component {
  render() {
    const { link, text, id } = this.props;
    return (
      <li key={id}>
       <p> <a href={link}>{text}</a></p>
      </li>
    );
  }
}
