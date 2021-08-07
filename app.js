require('dotenv').config();
const express=require('express'); 
const tasks= require('./router/tasks')
const connectDB = require('./db/connect');
const defaultRes=require('./middleware/defaults')
const app=express();
const defaultErr=require('./middleware/errorHandler')

//middleware
app.use(express.json())
app.use('/api/v1/tasks',tasks)
app.use(defaultRes)
app.use(defaultErr)

const port=3000 || process.env.PORT;

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server Started Listening at ${port}`));        
    }
    catch(e){
        console.log(e)
    }
}

start()
