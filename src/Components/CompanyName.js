import React, { Component } from "react";

export default class CompanyName extends Component {
  render() {
    const {Name,LogoUrl} = this.props
    return (
     <img src={LogoUrl} alt={Name} width="150" height="150"/>
    );
  }
}

