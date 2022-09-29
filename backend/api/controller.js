
import { response } from "express"
import { useParams } from "react-router-dom"
import aquaDAO from "../dao/aquaDAO.js"


class ctrl {
    static async apiGetHomePage(req, res, next) {
        console.log("api GetHomePage")
    }
    static async apiGetProducts(req, res, next) {
        const productsPerPage = 100
        const { productsList, totalNumProducts } = await aquaDAO.getProducts({
            productsPerPage,
        })
        let response = {
            products: productsList,
            total_results: totalNumProducts,
        }
        res.json(response);
    }
    static async apiPostProduct(req, res, next) {
        try {
            console.log(`req.boy.id= ${req.body.id}`)
            const product_id = parseInt(req.body.id)
            const description = req.body.body
            aquaDAO.postProduct(
                product_id,
                description
            )
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ status: e.message })
            console.log(`couldnì't post the product, ${e}`)
        }

    }
    static async apiDeleteProduct(req, res, next) {
        try {
            console.log("sono dentro all'api ")
            const product_id =req.query.id
            console.log(`product_id= ${product_id}`)
            aquaDAO.deleteProduct(product_id)
        } catch (e) {
            console.log(`couldn't dleete the product: ${e}`)
            res.status(404).json({ "status": e.message })
        }
        res.json({ "status": "success" })
    
    }
    
}
export default ctrl 