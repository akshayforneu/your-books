import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";
import { BookService } from "./services/BookService";

const configureAppStore = () => {
  const bookService = BookService.createInstance();
  const reduxSagaMonitorOptions = {
    context: {
      bookService,
    },
  };

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

  return store;
};

export const store = configureAppStore();
