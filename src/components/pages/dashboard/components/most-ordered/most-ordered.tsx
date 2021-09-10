import Dropdown from "../../../../dropdown/dropdown";
import { dropdownItems, MenuMostOrdered } from "./components/arrays/arrays";
import MostOrderedMenuItem from "./components/most-ordered-menu-item/most-ordered-menu-item";
import arrow_down from "../images/arrow-down.svg";
import "./most-ordered.scss";

const MostOrdered = () => {
    return (
        <div className="most-ordered">
            <div className="most-ordered__header">
                <h3 className="most-ordered__header_title">Most Ordered</h3>
                <Dropdown icon={arrow_down} title="Today" width="95px" items={dropdownItems} padding="14px" />
            </div>
            <div className="most-ordered__content">
                <div className="most-ordered__menu">
                    {MenuMostOrdered.map(item =>
                        <MostOrderedMenuItem key={item.id} menu_item={item} />
                    )}
                </div>
                <button className="most-ordered__button">View All</button>
            </div>
        </div>
    );
};

export default MostOrdered;