export const counterReducer = (state={value:0}, action) => {
  const { value } = state;
  switch (action.type) {
    case "INCREASE":
      return { ...state, value: value + 1 };

    case "DECREASE":
      return { ...state, value: value - 1 };

    default:
      return state;
  }
};
