import React, { Component } from "react";
import BlockReklama from "./Banner/BlockReklama";

export default class Bottom extends Component {
  render() {
    let mass = [
      {
        id: 0,
        url: "https://pp.userapi.com/c845324/v845324134/10cde1/w-A3bgjE37w.jpg",
        alt: "Первый баннер",
        text: "Описание первого баннера",
        width: 250,
        height: 250
      },
      {
        id: 1,
        url: "https://pp.userapi.com/c619527/v619527986/1f7df/FwMJzb67jhQ.jpg",
        alt: "Второй баннер",
        text: "Описание второго баннера",
        width: 250,
        height: 250
      },
      {
        id: 2,
        url: "https://pp.userapi.com/c624026/v624026860/e9ec/ohVrUYrsEhI.jpg",
        alt: "Третий баннер",
        text: "Описание третьего баннера",
        width: 250,
        height: 250
      }
    ];
    return (
      <div className="bottom">
        {" "}
        <BlockReklama data={mass} />{" "}
      </div>
    );
  }
}
