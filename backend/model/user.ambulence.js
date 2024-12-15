import mongoose from 'mongoose';

const userSchema= mongoose.Schema({
  
    mobilenumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
    }
   
)
const Ambulenceus=mongoose.model("Ambulenceus",userSchema);
export default Ambulenceus;