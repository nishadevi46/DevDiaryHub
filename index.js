import express from 'express'
import Connection from './database/db.js'
import dotenv from 'dotenv'
import Router from './routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'
const __dirname = path.resolve()
dotenv.config()
const app = express();
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
const port = process.env.PORT||8000;
app.use('/',Router)

    app.use(express.static(path.join(__dirname, "./frontend/build")))
    app.get('*', function(_, res){
        res.sendFile(path.join(__dirname, "./frontend/build/index.html"), function(err){
            res.status(500).send(err);
        })
    })
const USERNAME = process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
const URL= process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-o2zc291-shard-00-00.wgnbl4l.mongodb.net:27017,ac-o2zc291-shard-00-01.wgnbl4l.mongodb.net:27017,ac-o2zc291-shard-00-02.wgnbl4l.mongodb.net:27017/?ssl=true&replicaSet=atlas-103spw-shard-0&authSource=admin&retryWrites=true&w=majority`;
Connection(URL)
app.listen(port,()=>{
console.log(`connection  is successfully made at port ${port}`)
})
