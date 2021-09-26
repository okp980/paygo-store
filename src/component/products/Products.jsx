import { useQuery } from 'react-query'
import Button from '../../util/button/Button'
import { Header, Section, ScrollTop, ProductLIst, LoadingDiv, LoadMoreSection } from './products.style';
import Product from '../product/Product';
import { RiArrowUpSLine } from "react-icons/ri";
import Loader from "react-loader-spinner";
import { useState } from 'react';
import { useEffect } from 'react';


const Products = () => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(2)
    const [endOfPage, setEndOfPage] = useState(false)




    const { isLoading, isError, data } = useQuery('products', () => {
        return fetch("https://fakestoreapi.com/products").then(res =>
            res.json())
    })

    useEffect(() => {
        if (!data) return
        setProducts(data.slice(0, 6))
    }, [data])

    function paginateProducts() {
        const indexOfLastProduct = currentPage * 6;
        if (indexOfLastProduct > 20) {
            setEndOfPage(true)
            return
        }
        const indexOfFirstProduct = indexOfLastProduct - 6;
        const newProducts = data.slice(indexOfFirstProduct, indexOfLastProduct)
        setProducts([...products, ...newProducts])
        setCurrentPage(page => page + 1)
    }



    if (isLoading && !isError) return (
        <LoadingDiv>
            <Loader
                type="TailSpin"
                color="#000019"
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

    return (<>
        <Header><h1>store</h1></Header>
        <Section>
            <ProductLIst>
                {products.map((item) => <Product key={item.id} product={item} />)}
            </ProductLIst>
            <ScrollTop onClick={() => window.scrollTo(0, 0)}><RiArrowUpSLine className="icon" /></ScrollTop>
        </Section>
        <LoadMoreSection>
            {endOfPage ? <p>end of products</p> :
                <Button onClick={paginateProducts}>load more</Button>}
        </LoadMoreSection>
    </>
    )
}

export default Products
