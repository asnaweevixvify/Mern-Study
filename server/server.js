const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")

const blogRoute = require('./routes/blog')
const authRoute = require('./routes/auth')

require("dotenv").config()

const app = express()

//conect database
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("connect complete");
}).catch((err)=>{
    console.log(err);
})

// middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//route
app.use('/api',blogRoute)
app.use('/api',authRoute)


const port = process.env.PORT // ดึงค่า port จากไฟล์ .env

app.listen(port,()=>console.log("start server port",port))