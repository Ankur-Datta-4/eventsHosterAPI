const {ErrorCreate}=require('../errorClass')


const reportError = (err,req,res,next)=>{
    if(err instanceof ErrorCreate){
        
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({msg:`something went wrong..try again later`})
    
}

module.exports = reportError;