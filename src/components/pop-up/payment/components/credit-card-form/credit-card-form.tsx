import "./credit-card-form.scss";

interface TypeCreditCardFormProps {
    card_holder_name: string;
    card_number: number | string;
    date: number | string;
    cvv: number;
}

const CreditCardForm = ({ card_holder_name, card_number, date, cvv }: TypeCreditCardFormProps) => {
    return (
        <form className="credit-card-form">
            <label className="credit-card-form__label" htmlFor="card_name">Cardholder Name</label>
            <input className="credit-card-form__input" type="text" id="card_name" name="card_name" defaultValue={card_holder_name} />
            <label className="credit-card-form__label" htmlFor="card_number">Card Number</label>
            <input className="credit-card-form__input" type="text" id="card_number" name="card_number" defaultValue={card_number} />
            <span className="credit-card-form__items">
                <div className="credit-card-form__item">
                    <label className="credit-card-form__label" htmlFor="card_date">Expiration Date</label>
                    <input className="credit-card-form__input credit-card-form__small" type="text" id="card_date" name="card_date" defaultValue={date} />
                </div>
                <div className="credit-card-form__item">
                    <label className="credit-card-form__label" htmlFor="card_cvv">CVV</label>
                    <input className="credit-card-form__input credit-card-form__small" type="password" id="card_cvv" name="card_cvv" defaultValue={cvv} />
                </div>
            </span>
        </form>
    );
};

export default CreditCardForm;