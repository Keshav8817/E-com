import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';


function Create() {
let location =useLocation();
let navigate = useNavigate();
const [data , setData] =useState({
    firstName:"",
    lastName:"",
    age:"",
    occupation:"",

})


function ChangeHandler(event){
    const { name , value }= event.target; 

    setData((preVal)=>{
        return{
            ...preVal,
            [name] : value 
        }
    }
  
    )
    
}
const PostData =(e)=>{
   e.preventDefault();
  
axios
.post("https://ecomg.azurewebsites.net/save" , data)
.then(()=>{
    alert("Data Sent")
    navigate('/contact')
 
    
})
.catch((err)=>{
    console.log(err)
})
}
useEffect(()=>{
if(location?.state?.apiData){
    setData(location?.state?.apiData)
}
} , [])

  return (
   <div className='container'>
   <div className='row'>

    <div className=' text-center'>
        <h1>Add New New User</h1>
    </div>
    <div className='col-md-4'>
        <form >
            <div className='from-group'>
                <lable>Enter First Name</lable>
                <input value={data.firstName}name="firstName"type='text' placeholder='First Name' className='form-control'onChange={ChangeHandler}/>
            </div>
            <div className='from-group'>
                <lable>Enter Last Name</lable>
                <input value={data.lastName}name="lastName" type='text' placeholder='Last Name' className='form-control'onChange={ChangeHandler}/>
            </div>
            <div className='from-group'>
                <lable>Enter Age</lable>
                <input value={data.age}name="age" type='text' placeholder='Age' className='form-control'onChange={ChangeHandler}/>
            </div>
            <div className='from-group'>
                <lable>Enter Occupation</lable>
                <input value={data.occupation} name="occupation" type='text' placeholder='Occupation' className='form-control'onChange={ChangeHandler}/>
            </div>
            <button onClick={PostData} className='btn btn-primary'>Submit </button>
        </form>
    </div>
   </div>
  
   </div>
  )
}

export default Create