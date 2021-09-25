import Button from "../../util/button/Button"
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { CartActions } from "../../redux/slice/cartSlice";
import Counter from "../../util/counter/Counter";
const CartItem = ({ item }) => {
    const { price, title, quantity, totalPrice, id } = item
    const dispatch = useDispatch()
    return (
        <tr>
            <td><Link to={`/${id}`}>{title}</Link></td>
            <td>{price}</td>
            <td><Counter value={quantity} id={id} /></td>
            <td>
                ${totalPrice.toFixed(2)}
            </td>
            <td><Button onClick={() => dispatch(CartActions.deleteFromCart(id))}><MdDelete /></Button></td>
        </tr>
    )
}

export default CartItem
