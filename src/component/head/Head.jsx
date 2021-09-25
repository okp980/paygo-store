import { Cart, Header, NavMenuUser, UserNavLink, } from "./head.style"
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { signOutUserFromFirebase } from '../../firebase/firebaseUtil';
import { Link } from "react-router-dom";


const Head = () => {
    const cartQty = useSelector(state => state.cart.items.reduce((preVal, currVal) => preVal + currVal.quantity, 0))
    const { authenticated } = useSelector(state => state.auth);


    return (
        <Header>
            <div>
                <Link to="/"><h3>PAYGO STORE</h3></Link>
                <NavMenuUser>
                    <Cart >
                        <Link to='/cart'><FiShoppingCart /></Link>
                        <div className="counter">{cartQty}</div>
                    </Cart>
                    <UserNavLink >
                        {!authenticated ? <Link to='/signIn'>
                            sign in
                        </Link>
                            : <span onClick={signOutUserFromFirebase}>
                                sign out
                            </span>}
                    </UserNavLink>
                </NavMenuUser>
            </div>
        </Header>
    )
}

export default Head
