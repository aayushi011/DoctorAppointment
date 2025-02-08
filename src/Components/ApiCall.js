import axios from 'axios';
import showSnackbar from './Snackbar.js';

export const registrationcall = async(formData) =>{
    try{
        const response = await axios.post("http://localhost:3001/registration",formData);
        if(response.statuscode === 200){
            console.log(response.msg)
        }
    }
    catch (err){
        console.log("err");
    }
}

export const logincall = async(userLogin)=>{
    try{
    const loginresponse = await axios.post("http://localhost:3001/login",userLogin);
    if(loginresponse.statuscode === 200){
        console.log(loginresponse.msg)
    }
    console.log("Login API successfully hit");
    console.log(loginresponse);
    }
    catch(err){
        console.log("err");
    }
}

export const AddDoctorApicall = async(doctorData)=>{
    try{
    const AddDoctorApiresponse = await axios.post("http://localhost:3001/addDoctor",doctorData);
    if(AddDoctorApiresponse.statuscode === 200){
        console.log(AddDoctorApiresponse.msg);
    }
}catch(err){
    console.log(err);
}
}
 
