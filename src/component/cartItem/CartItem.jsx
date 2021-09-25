import Button from "../../util/button/Button"
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { CartActions } from "../../redux/slice/cartSlice";
import Counter from "../../util/counter/Counter";
const CartItem = ({ price, name, quantity, totalPrice, id }) => {
    const dispatch = useDispatch()
    return (
        <tr>
            <td><Link to='/product'>{name}</Link></td>
            <td>{price}</td>
            <td><Counter value={quantity} id={id} /></td>
            <td>
                ${totalPrice}
            </td>
            <td><Button onClick={() => dispatch(CartActions.deleteFromCart(id))}><MdDelete /></Button></td>
        </tr>
    )
}

export default CartItem
