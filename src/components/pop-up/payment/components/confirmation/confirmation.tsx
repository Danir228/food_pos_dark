import { useContext } from "react";
import OrdersItem from "../../../../pages/home/components/orders/components/orders-item";
import { mathRound } from "../../../../pages/provider/math-options";
import { useTypedSelector } from "../../../../pages/redux/hooks/useTypedSelector";
import line from "../../images/line.svg";
import plus from "../../images/plus.svg";
import { Context } from "../../../../context/context";

import "./confirmation.scss";

const Confirmation = () => {
    const { order } = useTypedSelector(state => state.order);
    const { handleClick } = useContext(Context);
    return (
        <div className="confirmation">
            <img className="confirmation__line" src={line} alt="line" onClick={() => handleClick(false)} />
            <div className="confirmation__header">
                <div className="confirmation__header_title">
                    <h3 className="confirmation__title">Confirmation</h3>
                    <h4 className="confirmation__subtitle">Orders #34562</h4>
                </div>
                <button className="confirmation__header_button">
                    <img src={plus} alt="plus" />
                </button>
            </div>
            <div className="confirmation__items">
                {order && order.products.map(item =>
                    <OrdersItem
                        key={item.id}
                        product={item}
                    />
                )}
            </div>
            <div className="confirmation__total">
                <span className="confirmation__total_item">
                    <strong className="confirmation__total_name">Discount</strong>
                    <strong className="confirmation__total_price">$ 0</strong>
                </span>
                <span className="confirmation__total_item">
                    <strong className="confirmation__total_name">Sub total</strong>
                    <strong className="confirmation__total_price">$ {mathRound(order.total, 100)}</strong>
                </span>
            </div>
        </div>
    );
};

export default Confirmation;