import Card from "../../util/card/Card"
import { ProductCard } from "./product.style"
import Button from '../../util/button/Button'
import { useDispatch } from 'react-redux'
import { CartActions } from '../../redux/slice/cartSlice'

const Product = ({ product }) => {
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
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="card-details">
                    <p>{truncateString(product.title)}</p>
                    <small>{product.category}</small>
                    <h5>{product.price}</h5>
                    <div className="btn-group">
                        <Button onClick={() => dispatch(CartActions.addToCart({ ...product, price: +product.price }))}>add to cart</Button>
                    </div>
                </div>
            </Card>
        </ProductCard>
    )
}

export default Product
