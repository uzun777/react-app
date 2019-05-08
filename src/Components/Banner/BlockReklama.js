import React, { Component } from "react";
import Banner from "./Banner";

export default class BlockReklama extends Component {
  render() {
    let first = this.props.data[0];
    let second = this.props.data[1];
    let third = this.props.data[2];
    return (
      <ul>
        <li key={first.id}>
          <Banner
            url={first.url}
            alt={first.alt}
            text={first.text}
            width={first.width}
            height={first.height}
          />
        </li>
        <li key={second.id}>
          <Banner
            url={second.url}
            alt={second.alt}
            text={second.text}
            width={second.width}
            height={second.height}
          />
        </li>
        <li key={third.id}>
          <Banner
            url={third.url}
            alt={third.alt}
            text={third.text}
            width={third.width}
            height={third.height}
          />
        </li>
      </ul>
    );
  }
}
