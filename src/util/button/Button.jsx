import Btn from "./button.style"

const Button = ({ children, secondary, ...props }) => {
    return (
        <Btn secondary={secondary} {...props}>
            {children}
        </Btn>
    )
}

export default Button
