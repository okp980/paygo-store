import Button from "../../util/button/Button"
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { CartActions } from "../../redux/slice/cartSlice";
import Counter from "../../util/counter/Counter";
const CartItem = ({ item }) => {
    const { price, title, quantity, totalPrice, id } = item
    const dispatch = useDispatch()
    function truncateString(str) {
        if (str.length > 20) {
            return str.slice(0, 20) + "...";
        } else {
            return str;
        }
    }
    return (
        <tr>
            <td><Link to={`/${id}`}>{truncateString(title)}</Link></td>
            <td>{price}</td>
            <td><Counter value={quantity} id={id} /></td>
            <td>
                ${totalPrice.toFixed(2)}
            </td>
            <td><div onClick={() => dispatch(CartActions.deleteFromCart(id))} className="delete"><FaTimes className="delete-icon" /></div></td>
        </tr>
    )
}

export default CartItem
