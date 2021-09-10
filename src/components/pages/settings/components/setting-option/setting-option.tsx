import { Link } from "react-router-dom";
import SettingOptionItem from "./components/setting-option-item/setting-option-item";
import { SettingOptionItems } from "./components/setting-option-items/setting-option-items";

import "./setting-option.scss";

const SettingOption = () => {
    return (
        <section className="setting-option">
            {SettingOptionItems.map(item =>
                <Link key={item.id} to={item.url + item.url2} >
                    <SettingOptionItem  option={item} />
                </Link>
            )}
        </section>
    );
};

export default SettingOption;