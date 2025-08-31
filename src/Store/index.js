import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import productReducer from "./product";
import cartReducer from "./cart";
import { thunk } from "redux-thunk";


const reducer = combineReducers({
    products: productReducer,
    cart: cartReducer
});

const Store = legacy_createStore(reducer,applyMiddleware(thunk));

export default Store