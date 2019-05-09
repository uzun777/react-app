export const peopleReducer = (
    state = {
      list: [],
      loading: false,
      error: null,
    },
    action
  ) => {
    switch (action.type) {
      case "LOADING":
        return { ...state, loading: true, error: null };
  
      case "LOAD":
        return {
          ...state,
          loading: false,
          error: null,
          list: action.payload.list
        };
  
      case "NOT_LOADED":
        console.log("REDUCER", action.payload);
        return {
          ...state,
          loading: false,
          error: action.payload
        };
  
      default:
        return state;
    }
  };
  