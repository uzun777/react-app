import React, { Component } from "react";
import Menu from "./Menu";
import Company from "./CompanyName";
import LinkList from "./LinkList";

export default class Top extends Component {
  render() {
    let d = [
      {
        link: "mail.ru",
        text: "Майл ру"
      },
      {
        link: "yandex.ru",
        text: "Яндекс"
      }
    ];
    return (
      <div>
        <ul >

          <li>
            <Company
              Name="Ruby"
              LogoUrl="https://cdn.shopifycloud.com/hatchful-web/assets/2adcef6c1f7ab8a256ebdeba7fceb19f.png"
            />
          </li>

          <li>
            <LinkList data={d} />
          </li>

          <li>
            <Menu />
          </li>

        </ul>
      </div>
    );
  }
}
