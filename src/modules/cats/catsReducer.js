export const catsReducer = (
  state = {
    list: [],
    pageCount: 1,
    loading: false,
    error: null,
    filter: ""
  },
  action
) => {
  switch (action.type) {
    case "FILTER_RESULTS":
      return { ...state, filter: action.payload };

    case "LOADING":
      return { ...state, loading: true, error: null };

    case "LOAD":
      return {
        ...state,
        loading: false,
        pageCount: action.payload.pageCount,
        error: null,
        list: action.payload.list
      };

    case "NOT_LOADED":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
