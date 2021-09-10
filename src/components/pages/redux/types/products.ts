export interface ProductState {
  products: Product[];
  loading: boolean;
  error: null | string;
}

export enum ProductsActionTypes {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
}

export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  text: string;
}

interface FetchProductAction {
  type: ProductsActionTypes.FETCH_PRODUCTS;
}

interface FetchProductSuccessAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: [];
}

interface FetchProductErrorAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}

export type ProductsAction =
  | FetchProductAction
  | FetchProductSuccessAction
  | FetchProductErrorAction;
