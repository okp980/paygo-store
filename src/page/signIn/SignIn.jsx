import Button from "../../util/button/Button"
import { Section } from "./signIn.style"
import { GrGoogle } from "react-icons/gr";
import { signInUser } from "../../firebase/firebaseUtil";
import { useHistory, useLocation } from 'react-router-dom'



const SignIn = () => {
    const history = useHistory()
    const location = useLocation()
    async function handleSignInUser() {
        try {
            await signInUser()
            if (location.state) {
                return history.push(location.state.from.pathname)
            }
            return history.push('/');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Section>
            <p>Sign in with your google account to continue.</p>
            <Button onClick={handleSignInUser}><GrGoogle className="icon" />sign in with google</Button>
        </Section>
    )
}

export default SignIn
