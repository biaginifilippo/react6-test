import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import getAll from '../services/services.js';
const SingleProduct = () => {
    let id = useParams()
    console.log(id)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        retrieveProducts();
    }, []);
    const retrieveProducts = () => {
        getAll(0)
            .then(response => {
                console.log(response.data.products);
                setProducts(response.data.products);
            })
            .catch(e => {
                console.log(`error catched in retrieveProducts, ${e} `);

            });

    }
    return (
        <div>
            {
                products.map((product) => {
                    let ans = false
                    product.id == id.productid ? (ans = true) : (ans = false)
                    console.log(`valore di id.productid= ${id.productid}, product.id= ${product.id}, ans = ${ans}  `)
                        if (ans==true)return (
                            <div>
                                <h2>{product.id}</h2>  
                                {product.body} <br />
                            </div>
                        )
                        else return(<div></div>)
                    }
            )}
                < br /> <Link to='/products' className='btn btn-secondary'> Back to the products</Link>
        </div>
    )
}
export default SingleProduct