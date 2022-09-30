
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
        if (isNaN(req.body.id))
        {
            console.log("couldn't create post, ID must be a number")
            res.status(400).json({"status" : "Couldn't create post, ID must be a number", "title": "ERROR"})
            return //("couldn't create post, ID must be a number")
        }
        try {
            console.log(`req.body.id= ${req.body.id}`)
           
            const product_id = parseInt(req.body.id)
            const description = req.body.body
            aquaDAO.postProduct(
                product_id,
                description
            )
            res.json({ status: "Post created correctly", title: "Success" })
        } catch (e) {
            res.status(500).json({ status: e.message })
            console.log(`couldn't post the product, ${e}`)
        }

    }
    static async apiDeleteProduct(req, res, next) {
        try {
            console.log("sono dentro all'api ")
            const product_id = req.query.id
            console.log(`product_id= ${product_id}`)
            aquaDAO.deleteProduct(product_id)
        } catch (e) {
            console.log(`couldn't dleete the product: ${e}`)
            res.status(404).json({ "status": e.message })
        }
        res.json({ "status": "success" })

    }
    static async apiChangeProduct(req, res, next) {
        console.log(`sono dentro al all'api req.body.id=${req.body.id}, req.body.body=${req.body.body} `)
        try {
            const product_id = parseInt(req.body.id)
            const description = req.body.body
            aquaDAO.changeProduct(product_id, description)
        } catch (e) {
            res.status(404).json({ "status": e.message })
        }
        res.status(200).json({ "status": "success" })
    }

}
export default ctrl 