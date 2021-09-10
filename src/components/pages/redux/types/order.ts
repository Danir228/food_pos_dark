export interface OrderState {
  loading: boolean;
  error: null | string;
  order: Order;
}

export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  text: string;
}

export interface OrderProduct extends Product {
  quantity: number;
}

export interface Order {
  products: OrderProduct[];
  total: number;
  count: number;
}

export enum OrderActionTypes {
  FETCH_ORDER = "FETHC_ORDER",
  FETCH_ORDER_SUCCESS = "FETCH_ORDER_SUCCESS",
  FETCH_ORDER_ERROR = "FETCH_ORDER_ERROR",
}

interface FetchOrderAction {
  type: OrderActionTypes.FETCH_ORDER;
}

interface FetchOrderSuccessAction {
  type: OrderActionTypes.FETCH_ORDER_SUCCESS;
  payload: Order;
}

interface FetchOrderErrorAction {
  type: OrderActionTypes.FETCH_ORDER_ERROR;
  payload: string;
}

export type OrderAction =
  | FetchOrderAction
  | FetchOrderSuccessAction
  | FetchOrderErrorAction;
