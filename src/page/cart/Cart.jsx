import Button from "../../util/button/Button"
import { Header, Items, Section, SmallerScreenItems, Summary } from "./cart.style"
import { Link } from 'react-router-dom'
import Checkout from "../../util/modal/checkout/Checkout";
import { useState } from "react";
import { useSelector } from 'react-redux'
import CartItem from '../../component/cartItem/CartItem'
import SmallerScreenCartItem from "../../component/smallerScreenCartItem/SmallerScreenCartItem";


const Cart = () => {
    const [checkout, setCheckout] = useState(false)
    const { items, amount } = useSelector(state => state.cart)
    const totalAmt = (amount - 5.99).toFixed(2)

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
                        {items.map(itm => <CartItem key={itm.id} id={itm.id} item={itm} />)}
                    </tbody>
                </table>
                <Link to="/">bact to store</Link>
            </Items>
            <SmallerScreenItems>
                <table>
                    <tbody>
                        {items.map(itm => <SmallerScreenCartItem key={itm.id} id={itm.id} item={itm} />)}
                    </tbody>
                </table>
                <Link to="/">bact to store</Link>
            </SmallerScreenItems>
            <Summary>
                <div>
                    <h4>order summary</h4>
                    <table>
                        <tbody>
                            <tr>
                                <td>subtotal</td>
                                <td>${amount.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>shipping fee</td>
                                <td>$5.99</td>
                            </tr>
                            {amount > 0 && <tr className="total">
                                <td>total</td>
                                <td>${totalAmt}</td>
                            </tr>}
                        </tbody>
                    </table>
                    <Button secondary disabled={amount === 0} onClick={handleOpenCheckoutModal}>checkout</Button>
                </div>
            </Summary>
            {checkout && <Checkout closeModal={handleCloseCheckoutModal} amount={totalAmt} />}
        </Section>
    )
}

export default Cart
