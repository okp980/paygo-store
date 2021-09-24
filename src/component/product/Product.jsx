import Card from "../../util/card/Card"
import { ProductCard } from "./product.style"
import Button from '../../util/button/Button'

const Product = ({ img, name, brandName, currentPrice, previousPrice }) => {
    function truncateString(str) {
        if (str.length > 34) {
            return str.slice(0, 34) + "...";
        } else {
            return str;
        }
    }
    return (
        <ProductCard>
            <Card>
                <div className="image">
                    <img src={`https://${img}`} alt="" />
                </div>
                <div className="card-details">
                    <p>{truncateString(name)}</p>
                    <small>{brandName}</small>
                    <h5>{currentPrice}<span>{previousPrice}</span></h5>
                    <div className="btn-group">
                        <Button>add to cart</Button>

                    </div>
                </div>
            </Card>
        </ProductCard>
    )
}

export default Product
