import { Dispatch } from "react";
import { Order, OrderAction, OrderActionTypes } from "../types/order";

export const fetchOrder = (order: Order) => {
    return (dispatch: Dispatch<OrderAction>) => {
        try {
            dispatch({ type: OrderActionTypes.FETCH_ORDER });
            dispatch({
                type: OrderActionTypes.FETCH_ORDER_SUCCESS,
                payload: order,
            });
            } catch (e) {
            dispatch({
                type: OrderActionTypes.FETCH_ORDER_ERROR,
                payload: "Произошла ошибка при загрузке меню!",
            });
        }
    };
};