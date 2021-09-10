import axios from "axios";
import { Dispatch } from "react";
import { ProductsAction, ProductsActionTypes } from "../types/products";

export const fetchProducts = (url: string) => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    try {
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS });
      const response = await axios.get(`${"http://localhost:5000/" + url}`);
      setTimeout(() => {
        dispatch({
          type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
          payload: response.data,
        });
      });
    } catch (e) {
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
        payload: "Произошла ошибка при загрузке меню!",
      });
    }
  };
};
