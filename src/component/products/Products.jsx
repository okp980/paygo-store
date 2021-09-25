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
        return fetch("https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
                "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY
            }
        }).then(res =>
            res.json())
    })

    useEffect(() => {
        if (!data) return
        setProducts(data.products.slice(0, 6))
    }, [data])

    function paginateProducts() {
        const indexOfLastProduct = currentPage * 6;
        if (indexOfLastProduct > 48) {
            setEndOfPage(true)
            return
        }
        const indexOfFirstProduct = indexOfLastProduct - 6;
        const newProducts = data.products.slice(indexOfFirstProduct, indexOfLastProduct)
        setProducts([...products, ...newProducts])
        setCurrentPage(page => page + 1)
    }



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

    return (<>
        <Header><h1>store</h1></Header>
        <Section>
            <ProductLIst>
                {products.map((item) => <Product key={item.id} id={item.id} img={item.imageUrl} name={item.name} brandName={item.brandName} currentPrice={item.price.current.text} price={item.price.current.value} previousPrice={item.price.previous.text} />)}
            </ProductLIst>
            <ScrollTop onClick={() => window.scrollTo(0, 0)}><RiArrowUpSLine /></ScrollTop>
        </Section>
        <LoadMoreSection>
            {endOfPage ? <p>end of products</p> :
                <Button onClick={paginateProducts}>load more</Button>}
        </LoadMoreSection>
    </>
    )
}

export default Products
