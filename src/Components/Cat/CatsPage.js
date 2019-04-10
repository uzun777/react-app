import React, { Component } from "react";
import CatElement from "./CatElement";
import Paginator from "../Paginator/Paginator";

export default class CatsPage extends Component {
  state = {
    Data: []
  };

  async componentDidMount() {
    ////// CAT API
    const url =
      "https://api.thecatapi.com/v1/images/search?limit=" +
      this.props.match.params.limit +
      "&page=" +
      this.props.match.params.page +
      "&order=DESC" +
      "&api_key=a1d4274c-8f2c-4ec5-b2c4-1fef39e0ac9e";

    let getData = await fetch(url).then(r  => r.json());
    this.setState({ Data: getData });

  }

  render() {
    let CatElementList;



    if (this.state.Data[0] != null) {
      CatElementList = this.state.Data.map(cat => (
        <CatElement {...cat} key={cat.id} />
      ));

      console.log("Data", this.state.Data);
    }

    //

    return (
      <div>
    <ul className="test">{CatElementList}</ul>;
    <Paginator totalPages="100" currentPage = {this.props.match.params.page} />
    </div>);
  }
}
