import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useParams, Link } from 'react-router-dom'

const Product = () => {

    const { id } = useParams()
    const url = `http://localhost:3000/products/${id}`
    const { data: product, error } = useFetch(url)
  return (
    <>
        <h2>Product</h2>
        { error && <p>{ error }</p> }
        {product && (
            <div>
                <h2>{ product.name }</h2>
                <p>R${ product.price }</p>
            </div>
        )}
    </>
  )
}

export default Product