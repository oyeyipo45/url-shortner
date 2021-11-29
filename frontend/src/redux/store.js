import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { redirectReducer, urlReducer } from './reducer';


const reducer = combineReducers({
  shortenedUrl: urlReducer,
  redirect: redirectReducer
});


const initialState = { }

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;