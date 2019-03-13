import React, { Component } from "react";

export default class CompanyName extends Component {
  render() {
    const {Name,LogoUrl} = this.props
    return (
      <p>{Name}</p>
    // <img src={LogoUrl} alt={Name} width="150" height="150"/>
    );
  }
}

