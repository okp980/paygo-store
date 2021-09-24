import { useState } from "react";
import { Dropdown, Header, MenuItem, Nav, NavMenuUser, UserNavLink, } from "./head.style"
import { BsPersonFill } from 'react-icons/bs';
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { signOutUserFromFirebase } from '../../firebase/firebaseUtil';
import { Link } from "react-router-dom";
import Card from "../../util/card/Card";


const Head = () => {
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
                        <MenuItem ><Link to='/cart'><FiShoppingCart /></Link></MenuItem>
                    </NavMenuUser>
                </Nav>
            </div>

        </Header>
    )
}

export default Head
