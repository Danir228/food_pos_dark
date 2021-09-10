import ConfirmPayment from "./components/confirm-payment/confirm-payment";
import Confirmation from "./components/confirmation/confirmation";

import "./payment.scss";

interface TypePaymentProps {
    active: boolean;
}

const Payment = ({ active }: TypePaymentProps) => {
    return (
        <div className={`${active ? "payment payment__active" : "payment"}`}>
            <div className="payment__overlay" >
                <div className="payment__confirmation">
                    <Confirmation />
                </div>
                <div className="payment__confirm_payment">
                    <ConfirmPayment />
                </div>
            </div>
        </div>
    );
};

export default Payment;