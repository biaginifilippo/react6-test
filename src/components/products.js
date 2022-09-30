import { Link, Outlet } from "react-router-dom"
import React from "react";
import CheckProduct from "./checkproduct";
const Products = () => {
    let id
    const [url, setUrl] = React.useState();
    const handleChange = (event) => {
        id = event.target.value;
        setUrl("/products/" + id)
        console.log(id)
        console.log(url)
    }
    const handleSubmit = (event) => {
        console.log(`id: ${id}`)

        console.log(url)
    }

    return (
        <div>
            <h4>Products Page</h4>
            Product Id: <input onChange={handleChange} type="text" name='id' id='inputid'></input>
            {/*  <button onClick = {()=>{console.log(url)}}> URL </button>*/}
            <Link to={url} className='btn btn-primary  ' >
                Enter
            </Link>
            <Outlet />
        </div>
    )
}
export default Products;
