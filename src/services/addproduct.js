import http from "../http-common";

let addProduct = async(data) => {
    let response
    
    try {
    response = await http.post("/products", data)
    } 
    catch(e){
        console.log(`ho trovato l'errore ${e}`)
        if (e.response.status==400)
    {
        console.log(`sono entrato nell'if `)
        return e.response.data
    }
    }
    return response.data
}
export default addProduct