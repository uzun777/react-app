import React, { Component } from "react";
import CatElement from "./CatElement";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import { changePage, filter } from "../../modules/cats/actions";

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
