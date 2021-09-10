import { combineReducers } from "redux";
import { orderReducer } from "./order-reducer";
import { productsReducer } from "./products-reducer";

export const rootReducer = combineReducers({
    products: productsReducer,
    order: orderReducer
});

export type RootState = ReturnType<typeof rootReducer>;