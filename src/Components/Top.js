import React, { Component } from "react";
import Menu from "./Menu";
import Company from "./CompanyName";
import LinkList from "./LinkList";

export default class Top extends Component {
  render() {
    let d = [
      {
        id: 1,
        link: "/",
        text: "Главная"
      },
      {
        id:2,
        link: "",
        text: "Форум"
      }
    ];
    return (
      <div className="top">
        <ul className="MainListMenu">
          <li>
            <Company Name="Site Name" />
          </li>

          <li>
            <LinkList data={d} />
          </li>

          <li className="Menu">
            <Menu />
          </li>
        </ul>
      </div>
    );
  }
}
