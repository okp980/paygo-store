import { useState } from "react";
import { Cart, Dropdown, Header, Nav, NavMenuUser, UserNavLink, } from "./head.style"
import { BsPersonFill } from 'react-icons/bs';
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { signOutUserFromFirebase } from '../../firebase/firebaseUtil';
import { Link } from "react-router-dom";
import Card from "../../util/card/Card";


const Head = () => {
    const cartQty = useSelector(state => state.cart.items.reduce((preVal, currVal) => preVal + currVal.quantity, 0))
    const [toggleOpen, setToggleOpen] = useState(false)
    const { authenticated } = useSelector(state => state.auth);


    return (
        <Header>
            <div>

                <Link to="/"><h3>PAYGO STORE</h3></Link>
                <Nav>
                    <NavMenuUser>
                        <UserNavLink onClick={() => setToggleOpen(prev => !prev)}>
                            <BsPersonFill />
                            <Dropdown toggle={toggleOpen} >
                                <Card>
                                    {!authenticated ? <Link to='/signIn'>
                                        sign in
                                    </Link>
                                        : <li onClick={signOutUserFromFirebase}>
                                            sign out
                                        </li>}
                                    <Link to='/account'>my account</Link>
                                    <Link to='/account'>my orders</Link>
                                </Card>
                            </Dropdown>
                        </UserNavLink>
                        <Cart >
                            <Link to='/cart'><FiShoppingCart /></Link>
                            <div className="counter">{cartQty}</div>
                        </Cart>
                    </NavMenuUser>
                </Nav>
            </div>

        </Header>
    )
}

export default Head
