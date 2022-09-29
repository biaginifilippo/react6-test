import mongodb from 'mongodb'
const ObjectId = mongodb.ObjectId
let products
export default class aquaDAO {
    static async injectDB(conn) {
        if (products) {
            return
        }
        try {
            products = await conn.db(process.env.DBNAME_NS).collection("products");
            console.log(`sono entrato qui ? ${products}`)
        } catch (e) {
            console.error(`unable to establish a collection handle with database ${e}`)
        }
    }
    static async getProducts({ } = {}) {
        let cursor

        try {
            cursor = await products
                .find(undefined)
        } catch (e) {
            console.log(`errore in getProducts, ${e}`)
            return { productsList: [], totalNumProducts: 0 }
        }
        const displayCursor = cursor//.limit(100).skip(0) 
        try {
            const productsList = await displayCursor.toArray()
            productsList.sort((a, b) => a.id > b.id ? 1 : -1)
            const totalNumProducts = 100
            console.log(`productsList= ${productsList}`)
            return ({ productsList, totalNumProducts }) //FONDAMENTALI LE GRAFFE ALTRIMENTI NON PASSI NULLA 
        } catch (e) {
            console.error(`couldn't issue the command, ${e}`)
            return { productsList: [], totalNumProducts: 0 }
        }
    }
    static async postProduct(product_id, description) {
        try {
            const postDoc = {
                id: product_id,
                body: description
            }
            return await products.insertOne(postDoc)
        } catch (e) {
            console.log(`unable to post product, ${e}`)
        }
    }
    static async deleteProduct (product_id) {
        console.log(`sono nel file DAO e product_id = ${product_id}`)
        const deleteDoc = {
            id: parseInt(product_id),
        }
        console.log(`${deleteDoc.id}`)
        console.log(`${deleteDoc}`)
        try {
            return products.deleteOne(deleteDoc)
        } catch (e) {
            console.log(`couldn't delete the product: ${e}`)
        }
    }
    static async changeProduct (product_id,description) {
        console.log(`sono dentro al DAO product_id= ${product_id}, description = ${description}`)
        try {products.updateOne(
            {id: product_id},
            {$set: {body: description} }
        )
        }catch (e){
            console.log(`Unable to modify the product description, ${e}`)
        }
    }
}