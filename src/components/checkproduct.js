import { useState, useEffect } from 'react';
import http from '../http-common.js'
import SingleProduct from './singleproduct'
import { useParams, Link } from 'react-router-dom'
import Error from './error'
const CheckProduct =() => {
    let anss = false  
    let id = useParams()
    const setAnss =(val) => { 
        anss= val
    }
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
    products.map((product)=> { 
        if (product.id== id.productid ) { 
            setAnss(true)

        }else {

        }
    })

    if (anss == true )
    {
        return (
            <SingleProduct/>
        )
    }
    else if (anss==false ){
        return (
        <div><Error/>
        < br /> <Link to='/products' className='btn btn-secondary'> Back to the products</Link>
        </div>)
    }
}
export default CheckProduct