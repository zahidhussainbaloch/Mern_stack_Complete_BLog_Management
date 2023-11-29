import React from "react";
import { useState } from "react";

import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import axios from 'axios';

import "./Registration.css";


const Registration = () =>{

         const [username, setUsername] = useState("");
         const [email, setEmail] = useState("");
         const [password, setPassword] = useState("");
         const [error, seterror] = useState(false);

         
         const handleSubmit = async (e)=>{
            e.preventDefault();
            
            seterror(false);

            
            try{
                  
                  const res = await axios.post('/auth/registration', {
                        
                        username,
                        email,
                        password
                        
                        
                        
                  });

                  res.data && window.location.replace("/login");
                  
                  console.log(res);
            }catch(error){

                  seterror(true);
                  // console.log(error);
            }


         } 
         


       return(
             
             <div className="Registration">

                   <span className="RegistrationTitle">Registration</span>
                   <form action="" className="RegistrationForm" onSubmit={handleSubmit}>

                  { error && 
                   <h6 style={{color: 'red', margintop:'20px'}}>Oop!..Something Went To Wront</h6>
                  }
                         
                         <label htmlFor="userName">UserName</label>
                         <input type="text" name="username" placeholder="username" className="registrationInput"
                            onChange={e=>setUsername(e.target.value)}
                         />

                         <label htmlFor="email">Email</label>
                         <input type="email" name="email" placeholder="Email" className="registrationInput"
                             onChange={e=>setEmail(e.target.value)}
                         />

                         <label htmlFor="password">Password</label>
                         <input type="password" name="password" placeholder="Password" className="registrationInput" 
                             onChange={e=>setPassword(e.target.value)}
                         />
                        <button type="submit" className="registrationButton">Registration</button>


                   </form>
                   <button className='registrationloginButton'><Nav.Link className='registrationloginButton Link' as={Link} to="/login" style={{color:'inherit'}}>Login</Nav.Link></button>
             </div>
       );
} 

export default Registration;