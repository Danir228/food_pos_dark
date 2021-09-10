import {
  OrderState,
  OrderAction,
  OrderActionTypes,
} from "../types/order";

const initialState: OrderState = {
  loading: false,
  error: null,
  order: { products: [], total: 0, count: 0 }
};

export const orderReducer = (
  state = initialState,
  action: OrderAction
): OrderState => {
  switch (action.type) {
    case OrderActionTypes.FETCH_ORDER:
      return { loading: true, error: null, order: { products: [], total: 0, count: 0 } };
    case OrderActionTypes.FETCH_ORDER_SUCCESS:
        return {loading: false, error: null, order: action.payload};
    case OrderActionTypes.FETCH_ORDER_ERROR:
        return {...state, error: action.payload};
    default:
      return state;
  }
};
