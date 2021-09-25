import Card from "../../util/card/Card"
import { ProductCard } from "./product.style"
import Button from '../../util/button/Button'
import { useDispatch } from 'react-redux'
import { CartActions } from '../../redux/slice/cartSlice'

const Product = ({ id, img, name, brandName, currentPrice, previousPrice, price }) => {
    const dispatch = useDispatch()
    function truncateString(str) {
        if (str.length > 30) {
            return str.slice(0, 34) + "...";
        } else {
            return str;
        }
    }
    return (
        <ProductCard>
            <Card>
                <div className="image">
                    <img src={`https://${img}`} alt={name} />
                </div>
                <div className="card-details">
                    <p>{truncateString(name)}</p>
                    <small>{brandName}</small>
                    <h5>{currentPrice}<span>{previousPrice}</span></h5>
                    <div className="btn-group">
                        <Button onClick={() => dispatch(CartActions.addToCart({ id, img, name, price: +price }))}>add to cart</Button>
                    </div>
                </div>
            </Card>
        </ProductCard>
    )
}

export default Product
