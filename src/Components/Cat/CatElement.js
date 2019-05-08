import React, { Component } from "react";

export default class CatElement extends Component {
  render() {
    const { breeds, id, url, width, height } = this.props;

    return (
      // <Link to={`/people/${id}`}>
      <div className="Cat-Element">
        <img src={url} width="500px" height="500px" alt={breeds} />
        <p>{`id: ${id}`}</p>
        <p>{`breeds: ${breeds}`}</p>
        <p>{`width: ${width}`}</p>
        <p>{`height: ${height}`}</p>
      </div>
      //  </Link>
    );
  }
}
