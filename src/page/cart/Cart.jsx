import Button from "../../util/button/Button"
import { Header, Items, Section, Summary } from "./cart.style"
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom'
import { BsArrowLeft } from "react-icons/bs";
import Checkout from "../../util/modal/checkout/Checkout";
import { useState } from "react";

const Cart = () => {
    const [checkout, setCheckout] = useState(false)

    function handleOpenCheckoutModal() {
        setCheckout(true)
    }
    function handleCloseCheckoutModal() {
        setCheckout(false)
    }
    return (
        <Section>
            <Header>
                <h3>Cart</h3>
            </Header>
            <Items>
                <table>
                    <thead>
                        <tr>
                            <th>product</th>
                            <th>price</th>
                            <th>qty</th>
                            <th>total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Link to='/product'>Analog Magazine Rack</Link></td>
                            <td>N1,399</td>
                            <td><input type="number" min="1" max="10" /></td>
                            <td>
                                N3,399
                            </td>
                            <td><Button><MdDelete /></Button></td>

                        </tr>

                    </tbody>
                </table>
                <Link to="/"><BsArrowLeft />bact to store</Link>
            </Items>
            <Summary>
                <div>
                    <h4>order summary</h4>
                    <table>
                        <tr>
                            <td>subtotal</td>
                            <td>N2,000</td>
                        </tr>
                        <tr>
                            <td>shipping</td>
                            <td>N599</td>
                        </tr>
                        <tr>
                            <td>add coupon code</td>

                        </tr>
                        <tr>
                            <td>total</td>
                            <td>N2,599</td>
                        </tr>
                    </table>
                    <Button onClick={handleOpenCheckoutModal}>checkout</Button>
                </div>
            </Summary>
            {checkout && <Checkout closeModal={handleCloseCheckoutModal} />}
        </Section>
    )
}

export default Cart
