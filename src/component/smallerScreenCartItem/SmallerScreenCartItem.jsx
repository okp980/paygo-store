import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { CartActions } from "../../redux/slice/cartSlice";
import Counter from "../../util/counter/Counter";
const SmallerScreenCartItem = ({ item }) => {
    const { price, title, quantity, totalPrice, id } = item
    const dispatch = useDispatch()
    function truncateString(str) {
        if (str.length > 30) {
            return str.slice(0, 30) + "...";
        } else {
            return str;
        }
    }
    return (
        <tr>
            <td className="small-screen--details">
                <Link to={`/${id}`}>{truncateString(title)}</Link>
                <p>unit price: <span>${price}</span></p>
                <p>total price: <span>${totalPrice.toFixed(2)}</span></p>
                <Counter value={quantity} id={id} />
            </td>
            <td className="small-screen--delete"><div onClick={() => dispatch(CartActions.deleteFromCart(id))} className=" delete"><FaTimes className="delete-icon" /></div></td >
        </tr >
    )
}

export default SmallerScreenCartItem
