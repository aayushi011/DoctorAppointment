import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router";
import RegistrationForm from './Components/RegistrationForm';
import LoginForm from './Components/LoginForm';
import  Home  from './Components/Home';
import Doctor from './Components/Doctor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/registration" element={<RegistrationForm/>} />
      <Route path="/login" element={<LoginForm/>} />
      <Route path='/Home' element = {<Home/>}/>
      <Route path='/addDoctor' element={<Doctor/>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
