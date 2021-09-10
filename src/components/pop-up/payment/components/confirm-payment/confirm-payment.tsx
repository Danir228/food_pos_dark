import { useRef, useState } from "react";
import Tab from "../tab/tab";
import CreditCardForm from "../credit-card-form/credit-card-form";
import arrow_down from "../../images/arrow-down.svg";
import { arrayTabs } from "./components/array-tabs/array-tabs";

import "./confirm-payment.scss";
import ButtonPayment from "./components/button/button";

const ConfirmPayment = () => {
    const [dropdown, setDropDown] = useState(false);
    const refButtons = useRef<HTMLDivElement>(null);
    const checked = (index?: number) => {
        if (refButtons.current?.children) {
            const result = refButtons.current.children;
            Array.from(result).map((item, i) => {
                if (i === index) {
                    item.dispatchEvent(new Event('click'));
                    item.classList.add("confirm-payment__tab_active");
                } else {
                    item.classList.remove("confirm-payment__tab_active");
                }
            });
        }
    };

    const OpenDropdown = () => {
        setDropDown(!dropdown);
    };

    return (
        <div className="confirm-payment">
            <div className="confirm-payment__header">
                <h3 className="confirm-payment__title">Payment</h3>
                <h4 className="confirm-payment__subtitle">3 payment method available</h4>
            </div>
            <div className="confirm-payment__payment_method">
                <h3 className="confirm-payment__payment_method_title">Payment Method</h3>
                <div className="confirm-payment__tabs" ref={refButtons}>
                    {arrayTabs.map(item =>
                        <Tab key={item.id} image={item.image} text={item.text} checked={checked} tabId={item.id} activeClass={item.activeClass} />
                    )}
                </div>
                <CreditCardForm
                    card_holder_name="Levi Ackerman"
                    card_number="2564 1421 0897 1244"
                    date="02/2022"
                    cvv={323}
                />
                <div className="confirm-payment__form_items">
                    <div className="confirm-payment__dropdown_wrapper">
                        <h3 className="confirm-payment__dropdown_title">Order Type</h3>
                        <div
                            className={
                                dropdown
                                    ?
                                    "confirm-payment__dropdown confirm-payment__dropdown_active"
                                    :
                                    "confirm-payment__dropdown"
                            }
                        >
                            <img className="confirm-payment__dropdown_icon" src={arrow_down} alt="arrow-down" onClick={() => OpenDropdown()} />
                            <strong className="confirm-payment__dropdown_text">Dine In</strong>
                            <div
                                className={
                                    dropdown
                                        ?
                                        "confirm-payment__dropdown_menu confirm-payment__dropdown_menu_active"
                                        :
                                        "confirm-payment__dropdown_menu"
                                }
                            >
                                <a className="confirm-payment__dropdown_item" href="/#">Item 1</a>
                                <a className="confirm-payment__dropdown_item" href="/#">Item 2</a>
                                <a className="confirm-payment__dropdown_item" href="/#">Item 3</a>
                            </div>
                        </div>
                    </div>
                    <form className="confirm-payment__form_item">
                        <label className="confirm-payment__label" htmlFor="table">Table no.</label>
                        <input className="confirm-payment__input" id="table" type="text" name="table"defaultValue="140" />
                    </form>
                </div>
                <div className="confirm-payment__bottom_buttons">
                    <ButtonPayment text="Cancel" clname="confirm-payment__bottom_cancel" add={true} />
                    <ButtonPayment text="Confirm Payment" clname="confirm-payment__bottom_confirm" add={false} />
                </div>
            </div>
        </div>
    );
};

export default ConfirmPayment;