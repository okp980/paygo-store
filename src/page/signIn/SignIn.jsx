import Button from "../../util/button/Button"
import { Section } from "./signIn.style"
import { GrGoogle } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../../redux/slice/authSlice";
import { signInUser } from "../../firebase/firebaseUtil";



const SignIn = () => {
    const dispatch = useDispatch()
    async function handleSignInUser() {
        try {
            const result = await signInUser()
            const user = result.user
            console.log(user);
        } catch (error) {
            console.log(error);
        }
        // dispatch(authSliceActions.signInuser())
    }
    return (
        <Section>
            <p>Sign in with your google account to continue.</p>
            <Button onClick={handleSignInUser}><GrGoogle />sign in with google</Button>
        </Section>
    )
}

export default SignIn
