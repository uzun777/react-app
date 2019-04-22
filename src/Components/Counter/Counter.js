import React from "react";
import { connect } from "react-redux";
import { increase, decrease } from "../../modules/counter/actions";

const mapState = state => ({ count: state.value, text: state.name });

const mapDispatch = dispatch => ({
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease())
});

export const Counter = connect(
  mapState,
  mapDispatch
)(props => {
  const { increase, decrease, count, text } = props;
  return (
    <div>
      <button onClick={increase}>+</button>
      <p>Число: {count}</p>
      <p>Строка: {text}</p>
      <button onClick={decrease}>-</button>
    </div>
  );
});
