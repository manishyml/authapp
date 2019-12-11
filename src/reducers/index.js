import { ADD_ARTICLE } from "../constants/action-types";
const initialState = {
  articles: []
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    let tempState = Object.assign({}, state);
    tempState.articles.push(action.payload);
    return tempState;
  }
  return state;
}
export default rootReducer;
