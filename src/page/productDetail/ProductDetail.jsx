import React from 'react'
import Loader from 'react-loader-spinner'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { CartActions } from '../../redux/slice/cartSlice'
import Button from '../../util/button/Button'
import Counter from '../../util/counter/Counter'
import { Header, ImageDescription, ImageDisplay, LoadingDiv, Section } from './productdetail.style'

const ProductDetail = () => {
    const { productId } = useParams()
    const productInCart = useSelector(state => state.cart.items.find(item => +productId === item.id))
    const dispatch = useDispatch()
    const history = useHistory()
    const { isLoading, isError, data } = useQuery('product', () => {
        return fetch(`https://fakestoreapi.com/products/${productId}`).then(res =>
            res.json())
    })

    if (isLoading && !isError) return (
        <LoadingDiv>
            <Loader
                type="TailSpin"
                color="#000000"
                height={50}
                width={50}
            />
        </LoadingDiv>
    )
    if (isError) return (
        <LoadingDiv>
            <p>Error Occured trying to fetch product data</p>
        </LoadingDiv>
    )

    return (
        <Section>
            <Header>
                <h3>Product Detail</h3>
            </Header>
            <ImageDisplay>
                <div className="image">
                    <img src={data.image} alt={data.title} />
                </div>
            </ImageDisplay>
            <ImageDescription>
                <h2>{data.title}</h2>
                <h3>${data.price}</h3>
                <p>{data.description}</p>
                <h4>qty</h4>
                <div className="counter">
                    <Counter value={productInCart ? productInCart.quantity : 1} id={+productId} />
                </div>
                <div className="btnControls">
                    <Button onClick={() => productInCart ? history.push('/cart') : dispatch(CartActions.addToCart(data))}>{productInCart ? "proceed to checkout" : "add to cart"}</Button>
                </div>
            </ImageDescription>

        </Section>
    )
}

export default ProductDetail
