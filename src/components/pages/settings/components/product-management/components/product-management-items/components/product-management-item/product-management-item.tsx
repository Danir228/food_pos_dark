import { useState } from "react";
import { Product } from "../../../../../../../redux/types/products";
import edit from "../../images/edit.svg";

import "./product-management-item.scss";

type ProductItemProps = {
    product: Product;
};

const ProductManagementItem = ({ product }: ProductItemProps) => {
    const [disabledInput, setDisabledInput] = useState(true);
    return (
        <div className="product-management-item">
            <div className="product-management-item__image_wrapper">
                <img className="product-management-item__image" src={product.image} />
            </div>
            <form className="product-management-item__form">
                <input
                    style={{ outline: `${disabledInput === false ? "auto" : "none"}` }}
                    className="product-management-item__form_name"
                    type="input"
                    disabled={disabledInput}
                    defaultValue={product.name}
                />
                <span className="product-management-item__form_items">
                    <input
                        style={{ outline: `${disabledInput === false ? "auto" : "none"}` }}
                        className="product-management-item__form_price"
                        type="input" disabled={disabledInput}
                        defaultValue={"$" + product.price}
                    />
                    <input
                        style={{ outline: `${disabledInput === false ? "auto" : "none"}` }}
                        className="product-management-item__form_text"
                        type="input" disabled={disabledInput}
                        defaultValue={product.text} />
                </span>
            </form>
            <div className="product-management-item__edit" onClick={() => setDisabledInput(!disabledInput)}>
                {disabledInput &&
                    <>
                        <img className="product-management-item__edit_image" src={edit} />
                        <strong>Edit dish</strong>
                    </>
                }
                {!disabledInput && <strong>Apply</strong>}
            </div>
        </div>
    );
};

export default ProductManagementItem;