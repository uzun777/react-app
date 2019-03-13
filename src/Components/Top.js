import React, { Component } from "react";
import Menu from "./Menu";
import Company from "./CompanyName";
import LinkList from "./LinkList";

export default class Top extends Component {
  render() {
    let d = [
      {
        link: "/",
        text: "Главная"
      },
      {
        link: "",
        text: "Форум"
      }
    ];
    return (
      <ul className="top">
        <li>
          <Company Name="Site Name"/>
        </li>

        <li>
          <LinkList data={d} />
        </li>

        <li>
          <Menu />
        </li>
      </ul>
    );
  }
}
