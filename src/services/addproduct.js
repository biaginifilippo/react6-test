import http from "../http-common";
function addProduct (data){
    return http.post("/products", data);
}
export default addProduct