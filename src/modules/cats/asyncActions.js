import { loading, load, notLoaded } from "../cats/actions";

export const loadCatData = page => async (dispatch, getState) => {
  console.log("HI FROM ASYNC",page);
  dispatch(loading());

  try {
    const url =
      "https://api.thecatapi.com/v1/images/search?limit=10" +
      "&page=" +
      page +
      "&order=DESC" +
      "&api_key=a1d4274c-8f2c-4ec5-b2c4-1fef39e0ac9e";

    let getData = await fetch(url).then(r  => r.json());
    const pageCount = await fetch(url).then(r => r.headers.get("Pagination-Count"));
   
    await dispatch(load(getData, pageCount));
  } catch (error) {
    dispatch(notLoaded(error));
  }
};
