import React, { Component } from "react";
import CatElement from "./CatElement";
<<<<<<< HEAD
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import { changePage, filter } from "../../modules/cats/actions";
=======
import Paginator from "../Paginator/Paginator";

import { connect } from "react-redux";
import { loading, loaded, notLoaded } from "../../modules/cats/actions";

const mapState = state => ({ value: state.counter.value});

const mapDispatch = dispatch => ({
  loading: () => dispatch(loading()),
  load: () => dispatch(load()),
  notLoaded: () => dispatch(notLoaded())
});

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
>>>>>>> 1b751b5f3da5ef1a38cd77b7663b031539deec30

const mapState = state => ({ catlist: state.catlist });

const mapDispatch = dispatch => ({
  changePage: (p) => dispatch(changePage(p)),
  filter: () => dispatch(filter())
});


export  class CatsPage extends Component {
  

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    changePage(pageNumber)
    // this.setState({ activePage: pageNumber });
  }


  render() {
    let CatElementList;
    console.log("TEST", this.props);
   const {activePage} = this.props.catlist;
    //

    return (
      <div className="d-flex justify-content-center">
        <Pagination
          activePage={activePage} //this.state.activePage
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    );
  }
};

export default connect(
  mapState,
  mapDispatch
)(CatsPage);
