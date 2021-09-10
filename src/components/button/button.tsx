import "./button.scss";

interface TypeButtonProps {
    text?: string;
    clname?: string;
    but_function: () => void;
}

const Button = ({text, clname, but_function}: TypeButtonProps) => {
    return (
        <button onClick={() => but_function()} className={clname ? `button ${clname}` : "button"}>{text}</button>
    );
};

export default Button;