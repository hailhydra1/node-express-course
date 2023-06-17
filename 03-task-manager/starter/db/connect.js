const mongoose=require('mongoose')
//url=MONGO_URI
const connectDb=(url)=>{  
  return mongoose
  .connect(url,{
    //to remove deprication warnings
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,

  })
}

module.exports=connectDb
  
  