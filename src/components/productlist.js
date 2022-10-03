import { useState, useEffect } from 'react';
import http from '../http-common.js'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import deleteproduct from "../services/deleteproduct"
import changeproduct from "../services/changeproduct"
const ProductList = () => {
    const [description,setDescription] =useState([])
    const [rows, setRows] = useState([])
    const [apiCall,setApiCall]=useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [operation,setOperation ] = useState([])
    const [modProd = {
        id: "",
        body: "",
    }, setModProd] = useState([])
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
    const handleChangeDescription = (event ) => { 
        setDescription(event.target.value)
    }
    try {
        return (
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className='col'></div>
                    <div class="col">
                        {products.map((product) => {
                            return (
                                <div>
                                    <br />
                                    <br />
                                    <div className="card text-center">
                                    <img src="https://www.prontopiscine.it/img/cms/Marchi/aqua.png" class="card-img-top" alt=""/>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.id}</h5>
                                            <p className="card-text">{product.body}</p>
                                            <div className='column'>
                                                <button className='btn btn-danger' onClick={() => {
                                                    setModProd(product)
                                                    setOperation("DELETE")
                                                    setApiCall("btn btn-danger")
                                                    setRows("disabled")
                                                    setShow(true)
                                                }}>
                                                    Delete
                                                </button>
                                                <button className='btn btn-warning' onClick={() => {
                                                    setModProd(product)
                                                    setDescription("")
                                                    setOperation("Modify")
                                                    setApiCall("btn btn-warning")
                                                    setRows("")
                                                    console.log (`product.id= ${product.id}, modProd.id =${modProd.id}`)
                                                    setShow(true)
                                                }}>
                                                    Modify
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            )
                        })
                        }
                    </div>
                    <div className='col'></div>
                </div>
                {/* QUESTO MODALE CAMBIA A SECONDA DEL TIPO DI OPERAZIONE RICHIESTA, 
                ABILITANDO/DISABILITANDO UN TEXTAREA, CAMBIANDO IL BOTTONE 
                E ANCHE L'OPERAZIONE ESEGUITA DA QUEST'ULTIMO */ }
                <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Are you sure to {operation} this product</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="row">
                                <b>Product ID : {modProd.id}</b> <br/>
                                This operarion is not reversible
                                <textarea className="form-control-lg" id="description" rows="3" 
                                onChange={handleChangeDescription } placeholder="New description" disabled={rows}></textarea>
                            </div>
                            </Modal.Body>
                        <Modal.Footer>
                            <Link to="/products" className="btn btn-primary" onClick={handleClose}>
                                Back to the products
                            </Link>
                            <button className={apiCall} onClick={()=> {
                                if (apiCall=="btn btn-danger"){
                                    deleteproduct(modProd)
                                    handleClose()
                                }
                                else 
                                {
                                    changeproduct(modProd.id,description)
                                    handleClose()
                                }
                            }}>Yes </button>
                            </Modal.Footer>
                    </Modal>
                </>
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