import { CardStyle } from './card.style'

const Card = ({ children }) => {
    return (
        <CardStyle>
            {children}
        </CardStyle>
    )
}

export default Card
