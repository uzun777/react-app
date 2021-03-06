import React, { Component } from "react";
import Link from "./Link";

export default class LinkList extends Component {
  render() {
    let LinkElemets = this.props.data.map(el => (
      <Link link={el.link} text={el.text} key={el.id} />
    ));

    return <ul className="LinkElemets">{LinkElemets}</ul>;
  }
}
