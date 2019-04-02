import React, { Component } from "react";
import Link from "../Link/Link";

export default class MenuElements extends Component {
  render() {
    let elements = this.props.data.map(el => (
      <Link link={el.link} text={el.text} key={el.id} />
    ));
    return (
      <div>
        <p>Меню</p>
        <ul> {elements}</ul>
      </div>
    );
  }
}
