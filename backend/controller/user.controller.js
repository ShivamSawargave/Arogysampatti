import Contactus from "../model/user.contact.js";
import Appointmentus from "../model/user.appointment.js";
import Ambulenceus from "../model/user.ambulence.js";


export const contact=async(req,res)=>{
    try{
        const {firstname,lastname,email,phonenumber,Message}=req.body;
        const contactus=await Contactus.findOne({})
        if(contactus){
            return res.status(400).json({message:"Your message already submited, I'll contact you as soon as"})
        }

        
        const createdUser= new Contactus({
            firstname:firstname,
            lastname:lastname,
            email:email,
            Message:Message,
            phonenumber:phonenumber
        })
        await createdUser.save()
        res.status(201).json({message:"contact you soon",contactus:{
            _id:createdUser._id,
            firstname:createdUser.firstname,
            email:createdUser.email
        }});
    }catch(error){
        console.log("Error:",error.message)
        res.status(500).json({message:"Internal server error"});
    }
};







export const appointment=async(req,res)=>{
    try{
        const {SelectDepartment,SelectDoctor,fullname,mobilenumber,email,calendar}=req.body;
        const appointmentus=await Appointmentus.findOne({})
        if(appointmentus){
            return res.status(400).json({message:"Your request is in process, I'll contact you as soon as"})
        }
        

        
        const createdUser= new Appointmentus({
                SelectDepartment:SelectDepartment,
                SelectDoctor:SelectDoctor,
                fullname:fullname,
                mobilenumber:mobilenumber,
                email:email,
                calendar:calendar
        })
        await createdUser.save()
        res.status(200).json({message:"Thank you for showing interest, our relationship executive will get in touch with you shortly.",appointmentus:{
            _id:createdUser._id,
            SelectDepartment:createdUser.SelectDepartment,
            SelectDoctor:createdUser.SelectDoctor,
        }});
    }catch(error){
        console.log("Error:",error.message)
        res.status(500).json({message:"Internal server error"});
    }
};





export const ambulence=async(req,res)=>{
    try{
        const {mobilenumber,email,address}=req.body;
        const ambulenceus=await Ambulenceus.findOne({})
        if(ambulenceus){
            return res.status(400).json({message:"Your request is in process"})
        }
        

        
        const createdUser= new Ambulenceus({
               
                mobilenumber:mobilenumber,
                email:email,
                address:address
        })
        await createdUser.save()
        res.status(202).json({message:"Ambulence will reach on given address.",ambulenceus:{
            _id:createdUser._id,
            email:createdUser.email,
            
        }});
    }catch(error){
        console.log("Error:",error.message)
        res.status(500).json({message:"Internal server error"});
    }
};



