import Button from "../../util/button/Button"
import { Header, Items, Section, Summary } from "./cart.style"
import { Link } from 'react-router-dom'
import { BsArrowLeft } from "react-icons/bs";
import Checkout from "../../util/modal/checkout/Checkout";
import { useState } from "react";
import { useSelector } from 'react-redux'
import CartItem from '../../component/cartItem/CartItem'


const Cart = () => {
    const [checkout, setCheckout] = useState(false)
    const { items } = useSelector(state => state.cart)

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
                        {items.map(itm => <CartItem key={itm.id} id={itm.id} name={itm.name} quantity={itm.quantity} price={itm.price} totalPrice={itm.totalPrice} />)}
                    </tbody>
                </table>
                <Link to="/"><BsArrowLeft />bact to store</Link>
            </Items>
            <Summary>
                <div>
                    <h4>order summary</h4>
                    <table>
                        <tbody>
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
                        </tbody>
                    </table>
                    <Button onClick={handleOpenCheckoutModal}>checkout</Button>
                </div>
            </Summary>
            {checkout && <Checkout closeModal={handleCloseCheckoutModal} />}
        </Section>
    )
}

export default Cart
