import { useState, useEffect } from 'react';
import http from '../http-common.js'
const ProductList = () => {
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
    try {
        return (
            <div>
                {products.map((product) => { 
                    return (
                        <div>
                            <br />
                            <br />
                            <h2>{product.id}</h2>
                            {product.body}
                            <br />
                        </div>
                    )
                })
                }
            </div>
        )
    }
    catch (e) {
        console.log(`qualcosa non è andatao nel return (probabilmente products undefined), ${e}`)
    }
}
export default ProductList
function getAll(page = 0) {
    let prova
    console.log("sono dentro a getAll")
    try {
        console.log("try get all")
        prova = http.get(`/products`);
        console.log(`ho passato prova ${http.get("/products")}`)
        return prova
    } catch (e) {
        console.log(`catch di getAll, ${e}`)
        console.log(`errore dentro la funzione getAll sul return, ${prova} ${e}`)
    }

}
function _find(query, by = "name", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`)
}