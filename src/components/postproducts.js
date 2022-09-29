import { useState } from 'react'
import addProduct from '../services/addproduct.js'
const PostProducts = () => {
    
    const [productID, setProductID]=useState([])
    const [description, setDescription]=useState([])
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
            <button className= 'btn btn-primary' onClick={()=>{addProduct(product)}}> Submit
            </button>
        </div>
    )
}
export default PostProducts