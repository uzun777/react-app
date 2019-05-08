import React, { Component } from "react";
import MenuElements from "./MenuElements";

export default class Menu extends Component {
  render() {
    return (
      <MenuElements
        data={[
          { id: 1, link: "google.com", text: "first item" },
          { id: 2, link: "yahoo.com", text: "second item" }
        ]}
      />
    );
  }
}
