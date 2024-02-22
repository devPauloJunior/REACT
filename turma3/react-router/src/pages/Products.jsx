import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import Style from '../assets/css/Products.module.css'


const Products = () => {
    const url = 'http://localhost:3000/products'
    const { data: items, error } = useFetch(url)
  
    return (
        <>
            <div>
                <h2>Lista de Produtos</h2>
                { error && <p>{ error }</p> }
                <ul className={Style.products}>
                    { items &&
                        items.map((product) => (
                            <li key={product.id}>
                                <h3>{ product.name }</h3>
                                <p>R${ product.price }</p>
                                <Link to={ `/product/${product.id} ` }>Detalhes</Link>
                            </li>
                        ))}
                </ul>
            </div>
        </>
    )
}

export default Products

