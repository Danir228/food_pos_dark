import * as React from "react";

import "./food-menu-header.scss";

import ArrowDown from "../../images/arrow-down.svg";
import Dropdown from "../../../../../../../../dropdown/dropdown";
import { FoodMenuDropdownItems } from "./components/dropdown-items/food-menu-dropdown-items";

interface FoodMenuHeaderProps {
    title: string;
}

const FoodMenuHeader = ({ title }: FoodMenuHeaderProps) => {
    return (
        <div className="food-menu-header">
            <h3 className="food-menu-header__title">{title}</h3>
            <Dropdown title="Dine In" icon={ArrowDown} items={FoodMenuDropdownItems} width="100px" padding="12px" />
        </div>
    );
};

export default FoodMenuHeader;