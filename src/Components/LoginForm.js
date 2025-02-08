import React, { useState } from 'react';
import {logincall} from './ApiCall';
import Popup from './Popup';
import { useNavigate } from 'react-router-dom';
import { Home } from './Home';

const LoginForm = () => {
  const [userLogin, setUserPassword] = useState({
    'email' : '',
    'password' : ''
  })

  const [error,seterror] = useState({
      erroremail:'',
      errorpassword:''
  })
  const [showPopupLogin,setShowPopupLogin] = useState(false);
  const [afterLogin,setAfterLogin] = useState(false);
  const NavigateHomepage = useNavigate();

  const handleOnchange = (event) =>{
    setUserPassword({
      ...userLogin,
      [event.target.name]:event.target.value
    })
  }

  const validationRegistration = (userLogin) =>{
    if(userLogin.email === ''){error.erroremail = "Enter Email Id"}
    if(userLogin.password === ''){error.errorpassword = "Enter password name"}
    return error;
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    validationRegistration(userLogin);
    console.log('Form Login Data:', userLogin);
    if(error.erroremail !== '' || error.errorpassword !== ''){
      seterror(error);
    }
    else{
      logincall(userLogin).then(()=>{
        console.log("call the login popup");
        setShowPopupLogin(true);
      })
    }
  }

  const handleCloseLogin = ()=>{
    console.log("hide the login popup");
    setShowPopupLogin(false);
    NavigateHomepage("/Home");
  }

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" 
          placeholder="Enter email" value={userLogin.email} name ='email'
            onChange={handleOnchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" 
            placeholder="Password" value={userLogin.password} name='password'
            onChange={handleOnchange} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <Popup show = {showPopupLogin} handleClose = {handleCloseLogin} text="Login"/>
    </div>
  );
}

export default LoginForm;
