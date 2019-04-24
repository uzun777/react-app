export const catsReducer = (
  state = {
    list: [],
    pageCount: null,
    loading: false,
    error: null,
    filter: ""
  },
  action
) => {
  const { pageCount, list, error } = action.payload;
  switch (action.type) {
    case "FILTER_RESULTS":
      return { ...state, filter: action.payload };

    case "LOADING":
      return { ...state, loading: true, error: null };

    case "LOAD":
      return {
        ...state,
        loading: false,
        pageCount: pageCount,
        error: null,
        List: List
      };

      case "NotLoaded":
      return {
        ...state,
        loading: false,
        pageCount: pageCount,
        error:error ,
        list: list
      };

    default:
      return state;
  }
};
