import React from "react";
import { connect } from "react-redux";
import { increase, decrease } from "../../modules/counter/actions";

const mapState = state => ({ value: state.counter.value});

const mapDispatch = dispatch => ({
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease())
});

export const Counter = connect(
  mapState,
  mapDispatch
)(props => {
  const { increase, decrease, value } = props;
  return (
    <div>
      <button onClick={increase}>+</button>
      <p>Число: {value}</p>
      <button onClick={decrease}>-</button>
    </div>
  );
});
