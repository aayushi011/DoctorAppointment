import React, { useState } from 'react';
import {registrationcall} from './ApiCall';
import Popup from './Popup';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    'firstName': '',
    'lastName': '',
    'email': '',
    'password': '',
  });
  const [error,seterror] = useState({
    errorname :'',
    errorlastname:'',
    erroremail:'',
    errorpassword:''
  });
  const [showPopup,setshowPopup] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  
  const handleClose = () => {
    setshowPopup(false);
  }

  const validationRegistration = (formData) =>{
    if(formData.firstName === ''){error.errorname = "Enter First Name"}
    if(formData.lastName === ''){error.errorlastname = "Enter Last Name"}
    if(formData.email === ''){error.erroremail = "Enter Email Id"}
    if(formData.password === ''){error.errorpassword = "Enter password name"}
    return error;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    validationRegistration(formData);
    console.log('Form submitted:', formData);
    if(error.errorname !== '' || error.errorlastname !== '' || error.erroremail !== '' || error.errorpassword !== ''){
      seterror(error);
    }
    else{
      // Submit the form data to your backend
      registrationcall(formData).then(()=>{
        console.log("API Called successfully");
      setshowPopup(true);
    }
    );
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h2>Registration</h2>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <p class="text-danger">{error.errorname}</p>
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <p class="text-danger">{error.errorlastname}</p>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <p class="text-danger">{error.erroremail}</p>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <p class="text-danger">{error.errorpassword}</p>
      </div>
      <button type="submit">Register</button>
    </form>
    <Popup show = {showPopup} handleClose = {handleClose} text ="Register" />
    </div>
  );
};

export default RegistrationForm;
