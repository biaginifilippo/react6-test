import express from 'express'
import ctrl from './controller.js'

const router = express.Router()


//router.route("/").get(ctrl.apiGetHomePage)
if (router.route("/products").get(ctrl.apiGetProducts)) console.log("ho crteato il route di /products")
router.route("/products").post(ctrl.apiPostProduct)
router.route("/products").delete(ctrl.apiDeleteProduct)

router.route("*").get((req,res)=>{ console.log("comunico ")})

//router.route("/about").get(ctrl.apiGetAbout)
export default router 