import app from './server.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'
import aquaDAO from './dao/aquaDAO.js'
dotenv.config()
const MongoClient = mongodb.MongoClient
const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.AQUA_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 250,
        useNewUrlParser: true
    }
)
    .catch(err => {
        console.log(err.stack)
        process.exit(1)
    })
    .then(async client => {
        await aquaDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })
