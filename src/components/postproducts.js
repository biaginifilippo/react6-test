
import addProduct from '../services/addproduct.js'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

const PostProducts = () => {
    const [response ={
      title:  "",
      status: ""
    }, setResponse]=useState([])
    const [productID, setProductID]=useState([])
    const [description, setDescription]=useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChangeID =(event) =>{
        setProductID(event.target.value)
    }
    const handleChangeDescription = (event ) => { 
        setDescription(event.target.value)
    }
    let product = {
        id: productID,
        body: description
    }
    return (
        <div>
            Product ID
            <div className="mb-3">
                <label htmlFor="productID" className="form-label"></label>
                <input type="text" className="form-control-sm" id="productID" placeholder="es. 102" onChange={handleChangeID} />
            </div>
            Description 
            <div className="mb-3">
                <label htmlFor="description" className="form-label"></label>
                <textarea className="form-control-lg" id="description" rows="3" onChange={handleChangeDescription}></textarea>
            </div>
            <button className= 'btn btn-primary' onClick={async ()=>{
                    setResponse(await addProduct(product))
                    handleShow()
                }}> Submit
            </button>
            <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{response.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{response.status}</Modal.Body>
        <Modal.Footer>
          <Link to= "/products" className="btn btn-secondary" onClick={handleClose}>
            Back to the products 
          </Link>

        </Modal.Footer>
      </Modal>
    </>
        </div>
    )
}
export default PostProducts