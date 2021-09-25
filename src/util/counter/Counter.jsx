import { useState } from "react"
import { useDispatch } from "react-redux"
import { CartActions } from "../../redux/slice/cartSlice"
import { CounterStyled } from "./counter.style"

const Counter = ({ value, id }) => {
    const [quantity, setQuantity] = useState(value)
    const dispatch = useDispatch()

    function incrementCounter() {
        if (quantity === 10) return
        setQuantity(quantity => quantity + 1)
        dispatch(CartActions.increaseQty(id))
    }

    function decrementCounter() {
        if (quantity === 1) return
        setQuantity(quantity => quantity - 1)
        dispatch(CartActions.decreaseQty(id))
    }

    return (
        <CounterStyled>
            <div className="quantity">
                <button className="quantity__minus" onClick={decrementCounter}><span>-</span></button>
                <input nbuttonme="quantity" type="text" className="quantity__input" value={quantity} readOnly />
                <button className="quantity__plus" onClick={incrementCounter}><span>+</span></button>
            </div>
        </CounterStyled>
    )
}

export default Counter
