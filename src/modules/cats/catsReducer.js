export const catsReducer = (state={currentPage:1, filter:''}, action) => {
  const { value } = state;
  switch (action.type) {
    case "CHANGE_PAGE":
      return { ...state, currentPage: action.payload };

 case "FILTER_RESULTS":
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};
