import { all, call, put, takeEvery } from "redux-saga/effects";
import { getData } from "../axios/apiCall";
import APIURL from "../axios/apiUrls";
import MovieCardModel from "../model/movieCardModel";
import ACTIONS from "../constants/action-types";

function* fetchCategories(action) {}
function* fetchTrending(action) {
  try {
    const URL = APIURL.trending;
    // const params = {
    //   client_id,
    //   client_secret,
    //   v,
    //   near: action.data,
    //   query: "pub",
    //   offset: 5,
    //   limit: 10,
    //   price: "2,3"
    // };
    const result = yield call(getData, URL);
    const cardsArray = result.results.map((item, index) => {
      return new MovieCardModel(item);
    });
    yield put({ type: ACTIONS.SEARCH.SAVE_MOVIE_LIST, data: cardsArray });
  } catch (error) {
    console.log(error);
  }
}

export { fetchTrending, fetchCategories };
