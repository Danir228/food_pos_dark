import { useLocation } from "react-router-dom";
import "./setting-option-item.scss";

interface SettingOptionItemType {
    id: number;
    image: string;
    title: string;
    text: string;
    url: string;
    url2: string;
}

type SettingOptionItemProps = {
    option: SettingOptionItemType;
};

const SettingOptionItem = ({ option }: SettingOptionItemProps) => {
    const location = useLocation();
    const resultIncludes = location.pathname.includes(option.url);
    return (
        <div className={resultIncludes ? "setting-option-item setting-option-item__active" : "setting-option-item"}>
            <span className="setting-option-item__image_wrapper">
                <img className="setting-option-item__image" src={option.image} />
            </span>
            <span className="setting-option-item__content">
                <h3 className="setting-option-item__title">{option.title}</h3>
                <p className="setting-option-item__text">{option.text}</p>
            </span>
        </div>
    );
};

export default SettingOptionItem;