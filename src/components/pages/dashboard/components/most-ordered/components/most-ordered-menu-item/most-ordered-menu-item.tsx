import "./most-ordered-meni-item.scss";

interface TypeMenuItem {
    id: number;
    image: string;
    title: string;
    subtitle: string;
}

interface MenuItemProps {
    menu_item: TypeMenuItem;
}

const MostOrderedMenuItem = ({ menu_item }: MenuItemProps) => {
    return (
        <div className="most-ordered-menu-item">
            <img className="most-ordered-menu-item__image" src={menu_item.image} />
            <span className="most-ordered-menu-item__texts">
                <h3 className="most-ordered-menu-item__title" >{menu_item.title}</h3>
                <p className="most-ordered-menu-item__subtitle">{menu_item.subtitle}</p>
            </span>
        </div>
    );
};

export default MostOrderedMenuItem;