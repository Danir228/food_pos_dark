import React, { useEffect } from "react";
import { OrdersNotification } from "../../../../pop-up/notification/notification";
import Payment from "../../../../pop-up/payment/payment";
import { mathRound } from "../../../provider/math-options";
import { useTypedSelector } from "../../../redux/hooks/useTypedSelector";
import OrdersItem from "./components/orders-item";
import { Context } from "../../../../context/context";

import "./orders.scss";

interface OrdersProps {
    title: string;
}

const Orders = ({ title }: OrdersProps) => {
    const { order } = useTypedSelector(state => state.order);
    const [payment, setPayment] = React.useState(false);
    const [stateNotification, ShowNotification] = React.useState(false);
    const [isActive, SetIsActive] = React.useState(false);

    const handleClick = (active: boolean) => {
        if (order.products.length === 0) {
            setPayment(false);
            ShowNotification(true);
            setTimeout(() => {
                ShowNotification(false);
            }, 2000);
        } else if (active && order.total > 0) {
            setPayment(true);
        } else if (!active) {
            ShowNotification(false);
            setPayment(active);
        }
    };

    const toggleClick = () => {
        SetIsActive(!isActive);
    };

    return (
        <Context.Provider value={{
            handleClick
        }}>
            <>
                <div className={isActive ? "orders orders__open" : "orders orders__close"}>
                    <div className="orders__container">
                        <h3 className="orders__title">{title}</h3>
                        <div className="orders__selectors">
                            <button className="orders__selectors_item">Dine In</button>
                            <button className="orders__selectors_item">To Go</button>
                            <button className="orders__selectors_item">Delivery</button>
                        </div>
                        <div className="orders__subtitle">
                            <strong className="orders__subtitle_item">Item</strong>
                            <article className="orders__subtitle_right">
                                <strong className="orders__subtitle_item">Qty</strong>
                                <strong className="orders__subtitle_item">Price</strong>
                            </article>
                        </div>
                        <div className="orders__content">
                            {order && order.products.map(item =>
                                <OrdersItem
                                    key={item.id}
                                    product={item}
                                />
                            )}
                        </div>
                        <div className="orders__total">
                            <div className="orders__discount">
                                <strong className="orders__discount_name">Discount</strong>
                                <strong className="orders__discount_price">$ 0</strong>
                            </div>
                            <div className="orders__subtotal">
                                <strong className="orders__subtotal_name">Sub total</strong>
                                <strong className="orders__subtotal_price">$ {mathRound(order.total, 100)}</strong>
                            </div>
                        </div>
                        <button className="orders__button_payment" onClick={() => handleClick(true)}>
                            Continue to Payment
                        </button>
                    </div>
                    <OrdersNotification active={stateNotification} />
                    <div
                        className={isActive ? "orders__toggle orders__toggle__active" : "orders__toggle"}
                        onClick={() => toggleClick()}>
                        <button
                            className={isActive ? "orders__toggle__button orders__toggle__button__active" : "orders__toggle__button"}>
                            {isActive ? ">>" : "<<"}
                        </button>
                        {!isActive && <p className="orders__toggle__text">
                            ORDERS
                        </p>}
                    </div>
                </div>
                <Payment active={payment} />
            </>
        </Context.Provider>
    );
};

export default Orders;