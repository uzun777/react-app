import React, { Component } from "react";

export default class Link extends Component {
  render() {
    const { link, text } = this.props;
    return (
      <li>
        <a href={link}>{text}</a>
      </li>
    );
  }
}
