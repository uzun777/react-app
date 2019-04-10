import React, { Component } from "react";

export default class Paginator extends  Component  {
  // state ={
  // nextPage:null,
  // prevPage:null
  // };

  render() {
    const { totalPages, currentPage } = this.props;
    return (
      <div>
        <ul>
          <li>{`${currentPage}`}  </li>

          <li>{`${totalPages}`} </li>
        </ul>
      </div>
    );
  }
}
