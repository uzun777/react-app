<<<<<<< HEAD
export const catsReducer = (state={activePage:1, filter:'',}, action) => {
  switch (action.type) {
    case "CHANGE_PAGE":
      return { ...state, activePage: action.payload };

 case "FILTER_RESULTS":
=======
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
>>>>>>> 1b751b5f3da5ef1a38cd77b7663b031539deec30
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
