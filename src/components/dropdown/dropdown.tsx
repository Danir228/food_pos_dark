import { useState } from "react";
import "./dropdown.scss";

interface DropdownItem {
    id: number;
    text: string;
}

type DropdownProps = {
    icon: string;
    title: string;
    width: string;
    padding: string;
    items: DropdownItem[];
};

const Dropdown = ({ icon, title, items, width, padding }: DropdownProps) => {
    const [dropdown, openDropdown] = useState(false);

    return (
        <div className={`${dropdown ? "dropdown dropdown__active" : "dropdown"}`} style={{width: `${width}`, padding: `${padding}`}}>
            <img className="dropdown__icon" src={icon} alt="icon" onClick={() => openDropdown(!dropdown)} />
            <strong className="dropdown__title">{title}</strong>
            <div className={`${dropdown ? "dropdown__menu dropdown__menu_active" : "dropdown__menu"}`}>
                <ul className="dropdown__list">
                    {items.map(item =>
                        <li key={item.id + Math.random()} className="dropdown__list_item">{item.text}</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;