import http from "../http-common";
function deleteproduct  (data)   {
    //PER LA DLEETE BISOGNA USARE LE QUERY ALTRIMENTI NON FUNZIONA 
    console.log(`chiamo l'api con data.id= ${data.id}`)
    return http.delete(`/products/?id=${data.id}`)
}
export default deleteproduct