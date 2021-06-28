import { useState, useEffect } from 'react'
import { getProducts } from '../services/product.service'
import { Details } from './Details'

const Products = () => {
    const [products, setProducts] = useState(undefined)

    useEffect(()=>{
        getProducts().then(res=>{
            setProducts(res.data)
            // console.log(res.data)
        },
        (err)=>{
            console.log(err)
        })
    },[])

    return(
        <>
            {products ? (
                <div>
                    <h1>Products</h1>
                    {products.map(product =>(
                        <div key={product.id}>
                            <h2>{product.label}</h2>
                            <h3>{product.price}</h3>
                            <Details id={product.id}/>
                        </div>
                    ))}
                </div>
            ) :(
                <h1>Loading...</h1>
            )}

        </>
    )
}

export { Products }