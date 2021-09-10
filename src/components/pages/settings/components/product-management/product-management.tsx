import Dropdown from "../../../../dropdown/dropdown";
import "./product-management.scss";

import filter from "../../../dashboard/images/filter.svg";
import Button from "../../../../button/button";
import ProductManagementItems from "./components/product-management-items/product-management-items";
import Menu from "../../../home/components/main_content/components/menu/menu";
import { productManagementArray } from "./components/product-management-array/product-management-array";

const manageCategories = [
    {
        id: 1,
        text: "item-1"
    },
    {
        id: 2,
        text: "item-2"
    },
    {
        id: 3,
        text: "item-3"
    },
];

const ProductManagement = () => {

    const showClick = () => {
        return;
    };

    return (
        <div className="product-management">
            <div className="product-management__header">
                <h2 className="product-management__title">Products Management</h2>
                <Dropdown icon={filter} title="Manage Categories" width="178px" padding="14px" items={manageCategories} />
            </div>
            <Menu textreplace="/settings/management/" arrayMenu={productManagementArray} />
            <ProductManagementItems />
            <div className="product-management__buttons">
                <Button but_function={showClick} text="Discard Changes" clname="product-management__discard" />
                <Button but_function={showClick} text="Save Changes" clname="product-management__save" />
            </div>
        </div>
    );
};

export default ProductManagement;
