import {catListLoading,catListLoaded,catListNotLoaded} from '../cats/actions'

export const loadCatData = page => async (dispatch,getState) =>{
    dispatch(catListLoading);
    try {
        const url =
      "https://api.thecatapi.com/v1/images/search?limit=10"+
      "&page=" +
      page +
      "&order=DESC" +
      "&api_key=a1d4274c-8f2c-4ec5-b2c4-1fef39e0ac9e";

    let getData = await fetch(url).then(r  => r.json());
    const pageCount=getData.headers.get("pagination-count")
    dispatch(catListLoaded(getData,pageCount));

    } catch (error) {
        dispatch(catListNotLoaded(error))
    }
}