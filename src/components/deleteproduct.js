import { useState } from "react"
import deleteproduct from "../services/deleteproduct"
const DeleteProduct =() => { 
    const [productID, setProductID] = useState([])
    const handleChangeID = (event) => { 
        setProductID(event.target.value)
        console.log(`event.target.value= ${event.target.value} productID= ${productID} product.id= ${product.id}`)
    }
    let product = { 
        "id": productID
    }
    return (
        <div>
            Product ID
            <div className="mb-3">
                <label htmlFor="productID" className="form-label"></label>
                <input type="text" className="form-control-sm" id="productID" placeholder="es. 102" onChange={handleChangeID} />
            </div>
            <button type="button" className="btn btn-danger" onClick={() =>{
                console.log(`product.id= ${product.id}`)
                deleteproduct(product)}}>Delete Product</button>
        </div>
    )
}
export default DeleteProduct