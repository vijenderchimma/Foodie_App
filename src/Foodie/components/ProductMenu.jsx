import axios from 'axios'
import React, { useEffect, useState } from 'react'
import API_URL from './helpers/apiPath'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'

const ProductMenu = () => {
    const [productData, setproductData] = useState([])

    const { firmId } = useParams()

    const productHandler = async () => {
        try {
            const response = await axios.get(`${API_URL}/products/get-products/${firmId}`)
            setproductData(response.data)
        } catch (error) {
            console.log(error)
            alert('products not fetched')
        }
    }

    useEffect(() => {
        productHandler()
    }, [])


    return (
        <>
            <Navbar />
            <section className="products-section">
                {productData && <h3 className='restaurant-name'>{productData.restaurantName}</h3>}
                {productData.products && productData.products.map(eachProduct => {
                    return (
                        <div className='product-box'>
                            <div>
                                <div><strong>{eachProduct.productName}</strong></div>
                                <div>₹{eachProduct.price}</div>
                                <div>{eachProduct.description}</div>
                            </div>
                            <div className='product-group'>
                                <img src={`${API_URL}/uploads/${eachProduct.image}`} />
                                <button>ADD</button>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default ProductMenu