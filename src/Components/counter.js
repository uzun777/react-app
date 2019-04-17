import React, { Component } from "react";
import {connect} from 'react-redux';
import {increase,decrease} from '../modules/counter/actions'

const mapState = state => ({count:state.counter});

const mapDispatch = dispatch => ({
    increase:() => dispatch(increase()),
    decrease:() => dispatch(decrease())
});


export const counter = connect(mapSate,mapDispatch)(props => {
return(
    <div>
        <button onClick={props.increase}>+  </button>
        <p>{props.count}</p>
         <button onClick={props.decrease}> - </button>
                </div>
);

});