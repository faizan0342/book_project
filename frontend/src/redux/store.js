import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import {thunk} from 'redux-thunk';
import {productReducer} from "./reducer/reducer.js"
import {productDetailReducer} from "./reducer/productDetailReducer.js"
import {ProductCardReducer} from "./reducer/ProductCardReducer.js"
// Correct the function name here
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const initialState = {
};

const store = createStore(
    combineReducers({
     product : productReducer,
     productDetail : productDetailReducer,
     productCardDetail: ProductCardReducer
    }),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;