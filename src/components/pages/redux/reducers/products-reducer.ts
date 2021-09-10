import { ProductsAction, ProductsActionTypes, ProductState } from "../types/products";

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null
};

export const productsReducer = (state = initialState, action: ProductsAction): ProductState => {
    switch (action.type) {
        case ProductsActionTypes.FETCH_PRODUCTS:
            return {loading: true, error: null, products: []};
        case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {loading: false, error: null, products: action.payload};
        case ProductsActionTypes.FETCH_PRODUCTS_ERROR:
            return {...state, products: []};
        default:
        return state;
    }
};