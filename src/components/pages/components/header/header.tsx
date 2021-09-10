import * as React from "react";

import "./header.scss";

import Search from "./images/search.svg";

interface HeaderProps {
    title: string | number;
    headerClass?: string;
    forms: boolean;
}

const Header = ({ title, forms, headerClass }: HeaderProps) => {
    const d = Date.now();
    const we = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(d);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

    return (
        <section className={`${headerClass ? "header__wrapper " + headerClass : "header__wrapper"}`}>
            <article className="header__title">
                <h3 className="header__title_item">{title}</h3>
                <p className="header__title_date">{`${we}, ${da} ${mo} ${ye}`}</p>
            </article>
            {forms && <form className="header__search">
                <input className="header__search_input" type="input" placeholder="Search for food, coffe, etc.." />
                <img className="header__search_image" src={Search} alt="search-icon" />
            </form>}
        </section>
    );
};

export default Header;