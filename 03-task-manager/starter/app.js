
const express=require('express')
const app=express()
const tasks=require('./routes/tasks')
const connectDB=require('./db/connect')//connecting to mongodb
require('dotenv').config() //to hide the connection string(MONGO_URI)
const notFound=require('./middleware/not-found')
const errorHandler=require('./middleware/error-handler')


app.use(express.json())
app.use(express.static('./public'))

app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandler)

const port=process.env.PORT || 3000

const start=async ()=>{ 
    try{
        //first connect to database then spin up port 3000
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening on port  ${port}...`))
    }   
    catch(error){
        console.log(error)
    }  
}

start()


