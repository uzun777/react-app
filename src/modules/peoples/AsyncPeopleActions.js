import { loading, load, notLoaded } from "../peoples/actions";

export const loadData = () => async (dispatch, getState) => {
  dispatch(loading());

  try {
    const url = "http://localhost:3004/profile";

    let getData = await fetch(url).then(r  => r.json());
    await dispatch(load(getData));
  } catch (error) {
    dispatch(notLoaded(error));
  }
};
