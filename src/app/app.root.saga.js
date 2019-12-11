import { all, call, put, takeEvery } from "redux-saga/effects";
import { LOAD_TODO_LIST } from "../constants/action-types";
import { fetchToDoList } from "../sagas/fetchList.saga";

export default function* rootSaga() {
  yield all([yield takeEvery(LOAD_TODO_LIST, fetchToDoList)]);
}
