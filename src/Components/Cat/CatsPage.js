import React, { Component } from "react";
import CatElement from "./CatElement";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import { loadCatData } from "../../modules/cats/asyncActions";
import {withRouter} from 'react-router'

import { loading, load, notLoaded } from "../../modules/cats/actions";

const mapState = state => ({ ...state.catlist });
const mapDispatch = dispatch => ({
  loading: () => dispatch(loading()),
  load: () => dispatch(load()),
  notLoaded: () => dispatch(notLoaded()),
  loadCatData: page => dispatch(loadCatData(page))
});


class CatsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activePage:this.props.match.params.page
    };}

  componentDidMount() {
    this.props.loadCatData(this.props.match.params.page);
  }

  handlePageChange(pageNumber) {
    this.props.loadCatData(pageNumber);
    this.setState({activePage: pageNumber});
    this.props.history.push(`/cats/${pageNumber}`)
  }

  render() {
    // console.log("TEST13", this.props.list.value)
    let listOfCats = this.props.list? this.props.list.map((cat)=>(
      <CatElement {...cat} />
    )):null;
    
    //

    return (
      console.log("TEST12", this.state),
      
      (
        <div className="Cats"> 
          {listOfCats}
          <div className="d-flex justify-content-center">
            <Pagination
              activePage={this.state.activePage} //this.state.activePage
              itemsCountPerPage={10}
              totalItemsCount={1000}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange.bind(this)}
              getPageUrl={i => `/cats/${i}`}
              itemClass="page-item"
              linkClass="page-link"
            />
          </div>
        </div>
      )
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(CatsPage);
