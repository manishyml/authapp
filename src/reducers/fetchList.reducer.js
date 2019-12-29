import ACTIONS from "../constants/action-types";
const initialState = {
  movies: [],
  testMsg: "TEst MESSAGE"
};
function fetchList(state = initialState, action) {
  if (action.type === ACTIONS.SEARCH.SAVE_MOVIE_LIST) {
    let tempState = Object.assign({}, state);
    tempState.movies = [...action.data];
    return tempState;
  }
  return state;
}
export default fetchList;
