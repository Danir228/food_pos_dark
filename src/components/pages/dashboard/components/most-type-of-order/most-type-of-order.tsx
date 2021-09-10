import Dropdown from "../../../../dropdown/dropdown";
import arrow_down from "../images/arrow-down.svg";
import { dropdownItems } from "../most-ordered/components/arrays/arrays";
import circle from "../images/circle.svg";
import InfoItem from "./components/info-item/info-item";
import red from "../images/red.svg";
import orange from "../images/orange.svg";
import blue from "../images/blue.svg";

import "./most-type-of-order.scss";

const MostTypeOfOrder = () => {
    return (
        <div className="most-type-of-order">
            <div className="most-type-of-order__header">
                <h3 className="most-type-of-order__header_title">Most Type of Order</h3>
                <Dropdown icon={arrow_down} title="Today" width="95px" items={dropdownItems} padding="14px" />
            </div>
            <div className="most-type-of-order__content">
                <img className="most-type-of-order__circle" src={circle} alt="circle" />
                <div className="most-type-of-order__info">
                    <InfoItem image={red} title="Dine In" subtitle="200 customers" />
                    <InfoItem image={orange} title="To Go" subtitle="122 customers" />
                    <InfoItem image={blue} title="Delivery" subtitle="264 customers" />
                </div>
            </div>
        </div>
    );
};

export default MostTypeOfOrder;