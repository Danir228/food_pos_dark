import { useContext } from "react";
import { Context } from "../../../../../../context/context";

interface TypeButtonProps {
    text?: string;
    clname?: string;
    add: boolean;
}

const ButtonPayment = ({ text, clname, add }: TypeButtonProps) => {
    const { HandleClick } = useContext(Context);

    const showClick = () => {
        if (add) {
            HandleClick();
        }
    };

    return (
        <button
            className={clname ? `confirm-payment__button ${clname}` : "confirm-payment__button"}
            onClick={() => showClick()}
        >
            {text}
        </button>
    );
};

export default ButtonPayment;