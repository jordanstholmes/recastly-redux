import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

var store = createStore(rootReducer, {
  videos: [],
  currentVideo: null
}, applyMiddleware(thunk));
// TODO:  Create your redux store, apply thunk as a middleware, and export it!
export default store;