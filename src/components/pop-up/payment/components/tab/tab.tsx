import check from "../../images/check.svg";

interface TabProps {
    image: string;
    text: string;
    checked: (id?: number) => void;
    tabId?: number;
    activeClass: boolean;
}

const Tab = ({ image, text, checked, tabId, activeClass }: TabProps) => {
    return (
        <button className={activeClass ? "confirm-payment__tab confirm-payment__tab_active": "confirm-payment__tab"} onClick={() => checked(tabId)}>
            <img className="confirm-payment__tab_image" src={image} alt="method" />
            <strong className="confirm-payment__tab_text">{text}</strong>
            <img className="confirm-payment__tab_check" src={check} alt="check" />
        </button>
    );
};

export default Tab;