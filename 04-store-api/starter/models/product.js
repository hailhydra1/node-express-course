const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    name:{
        type:String,
        reqired:[true,'product name must be provided']
    },
    price:{
        type:Number,
        reqired:[true,'product price must be provided']
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:['ikea','liddy','caressa','marcos'],
            message:'{VALUE} is not supported'
        },
    }
})

module.exports=mongoose.model('Product',productSchema)