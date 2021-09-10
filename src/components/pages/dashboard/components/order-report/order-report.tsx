import filter from "../../images/filter.svg";
import Rows from "./components/rows/rows";
import Dropdown from "../../../../dropdown/dropdown";

import "./order-report.scss";

const dropdownItems = [
    {
        id: 1,
        text: "Customer"
    },
    {
        id: 2,
        text: "Total Payment"
    },
    {
        id: 1,
        text: "Status"
    },
];

const OrderReport = () => {
    return (
        <div className="order-report">
            <div className="order-report__header">
                <span className="order-report__title">
                    <h3 className="order-report__subtitle">Order Report</h3>
                    <Dropdown icon={filter} title="Filter Order" width="128px" items={dropdownItems} padding="14px" />
                </span>
                <article className="order-report__menu_wrapper">
                    <ul className="order-report__menu">
                        <li className="order-report__menu_item">Customer</li>
                        <li className="order-report__menu_item">Menu</li>
                        <li className="order-report__menu_item">Total Payment</li>
                        <li className="order-report__menu_item">Status</li>
                    </ul>
                </article>
                <Rows />
            </div>
        </div>
    );
};

export default OrderReport;