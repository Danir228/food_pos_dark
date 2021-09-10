import * as React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { sidebarItems } from "./sidebar-items";

import "./sidebar.scss";

const Sidebar = () => {
    const childSidebar = React.useRef<HTMLElement>(null);
    const location = useLocation();

    return (
        <aside className="sidebar" ref={childSidebar}>
            <NavLink to="/home/hot-dishes" className="sidebar__items sidebar__logo">
                <span className="sidebar__logo_wrapper">
                    <i className="icon-logo sidebar__icon" />
                </span>
            </NavLink>
            {sidebarItems.map(item => {
                const resultIncludes = location.pathname.includes(item.url);
                return (
                    <Link
                        className={`sidebar__items ${resultIncludes ? "sidebar__active" : ""}`}
                        key={item.id}
                        to={item.url + item.url2}
                    >
                        <i className={`${item.icon} sidebar__icon`} />
                    </Link>
                );
            }
            )
            }
        </aside >
    );
};

export default Sidebar;