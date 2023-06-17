//asynchronous try catch that can be used everywhere
const asyncWrapper=(fn)=>{
    return async(req,res,next)=>{
        try{
            await fn(req,res,next)
        }
        //length of id is wrong
        catch(error){
            next(error)
        }
    }
}



module.exports=asyncWrapper