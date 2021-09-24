import Button from "../../util/button/Button"
import { Section } from "./signIn.style"
import { GrGoogle } from "react-icons/gr";

const SignIn = () => {
    return (
        <Section>
            <p>Sign in with your google account to continue.</p>
            <Button><GrGoogle />sign in with google</Button>
        </Section>
    )
}

export default SignIn
