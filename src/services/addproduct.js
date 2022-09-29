import http from "../http-common";
function addProduct (data){
    let response = http.post("/products", data);
    return response.data
}
export default addProduct