import { useState } from "react";
import ReactDOM from "react-dom";
import Button from "../../button/Button"
import { Modal, Overlay } from "./checkout.style"
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";


const Checkout = ({ closeModal, amount }) => {

    const { authenticated, currentUser } = useSelector(state => state.auth)
    const location = useLocation()

    const userDetails = {
        fullName: currentUser.displayName,
        email: currentUser.email,
        phoneNumber: ''
    }
    const [details, setDetails] = useState(userDetails)

    const config = {
        public_key: process.env.REACT_APP_FLUTTERID,
        tx_ref: Date.now(),
        amount: amount,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: details.email,
            phonenumber: details.phoneNumber,
            name: details.fullName,
        },
        customizations: {
            title: 'Paygo Store',
            description: 'Payment for items in cart',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    }

    const handleFlutterPayment = useFlutterwave(config)
    function handleChange(e) {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    function handlePayment(response) {
        console.log(response);
        closePaymentModal()
    }

    function handleSubmit(e) {
        e.preventDefault()
        handleFlutterPayment({ callback: handlePayment, onClose: () => { closeModal() } })
        setDetails(userDetails)
    }

    if (!authenticated) {
        return <Redirect
            to={{
                pathname: "/signIn",
                state: { from: location }
            }}
        />
    }

    return (
        <>
            {ReactDOM.createPortal(<Overlay onClick={closeModal} />, document.getElementById("overlay"))}
            {ReactDOM.createPortal(<Modal>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="fullName">full name</label>
                        <input type="text" name="fullName" id="fulName" value={details.fullName} onChange={handleChange} required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" id="email" value={details.email} onChange={handleChange} required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="phoneNumber">phone number</label>
                        <input type="tel" name="phoneNumber" id="phoneNumber" value={details.phoneNumber} onChange={handleChange} required />
                    </div>
                    <Button >proceed to payment</Button>
                </form>
            </Modal>, document.getElementById("checkout-modal"))}
        </>
    )
}

export default Checkout
