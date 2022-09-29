import http from "../http-common";

function getAll(page = 0) {
    try {
        return http.get(`/products`);
    } catch (e) {
        console.log(`errore dentro la funzione getAll sul return, ${e}`)
    }
}
export default getAll ;
