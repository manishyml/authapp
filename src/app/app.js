import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./app.root.saga";
import Home from "../components/home/home";
import history from "./app.history";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route exact path="/" component={Home} />
        </Router>
      </Provider>
    );
  }
}
export default App;
