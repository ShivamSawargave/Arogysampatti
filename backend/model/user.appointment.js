import mongoose from 'mongoose';

const userSchema= mongoose.Schema({
    SelectDepartment:{
        type:String,
        required:true
    },
    SelectDoctor:{
        type:String,
        required:true
    },
    fullname:{
        type:String,
        required:true,
        unique:true
    },
    mobilenumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    calendar:{
        type:String,
        required:true
    }
    }
   
)
const Appointmentus=mongoose.model("Appointmentus",userSchema);
export default Appointmentus;