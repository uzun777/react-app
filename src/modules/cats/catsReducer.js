export const catsReducer = (state={activePage:1, filter:'',}, action) => {
  switch (action.type) {
    case "CHANGE_PAGE":
      return { ...state, activePage: action.payload };

 case "FILTER_RESULTS":
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};
