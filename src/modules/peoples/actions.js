  export const loading = () => {
    return { type: "LOADING" };
  };
  
  export const load = (list) => {
    return { type: "LOAD", payload: { list } };
  };
  
  export const notLoaded = error => {
    return { type: "NOT_LOADED", payload: error };
  };
  