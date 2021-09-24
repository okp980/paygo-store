import React from 'react'
import { useState } from 'react'
import Button from '../../util/button/Button'
import { Header, ImageDescription, ImageDisplay, Section, SimilarProducts } from './productdetail.style'

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);

    function handleQuantity(e) {
        setQuantity(e.target.value)
    }
    return (
        <Section>
            <Header>
                <h3>Product Detail</h3>

            </Header>
            <ImageDisplay>
                <div className="image">

                </div>
            </ImageDisplay>
            <ImageDescription>
                <h2>diamond rings</h2>
                <h3>N25,000</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam error accusantium commodi optio eveniet quis accusamus animi veritatis magnam laudantium, magni consectetur atque vero totam.</p>
                <h4>qty</h4>
                <input type="number" min="1" max="10" step="1" value={quantity} onChange={handleQuantity} />
                <div className="counter"></div>
                <div className="btnControls">
                    <Button>buy now</Button>
                </div>
            </ImageDescription>
            <SimilarProducts>v</SimilarProducts>
        </Section>
    )
}

export default ProductDetail
