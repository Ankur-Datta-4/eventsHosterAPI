class ErrorCreate extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode
    }
}

const useErrorCreate=(msg,status)=>{
  
    return new ErrorCreate(msg,status)
}


module.exports={useErrorCreate,ErrorCreate};