import React from 'react';
import { useContext, useRef } from 'react';

import {Nav} from 'react-bootstrap';

import {Link} from 'react-router-dom';

import { Context } from '../../Components/context/Context';

import axios from 'axios';

import './Logn.css';



const Login= ()=>{
  
        
        const userRef = useRef();
        const passwordRef = useRef();

    
       /* const [username, setUsername] = useState("");
       const [password, setPassword] = useState(""); */
    

      const {dispatch, isFetching} = useContext(Context);

      const handleSubmit= async (e)=>{
              
        e.preventDefault();

        // console.log(userRef.current.value)
        // console.log(passwordRef.current.value)

        dispatch({type:'LOGIN_START'});

        try{
            const res = await axios.post("/auth/login", {
              username:userRef.current.value,
              password:passwordRef.current.value,
            })

            dispatch({type:'LOGIN_SUCCESS', payload:res.data });

        }catch(e){

          dispatch({type:'LOGIN_FAILURE'});
        }

      }

      console.log(isFetching);

        return (
               <div className="login">

                    <div className="loginForm">
                        <span className="loginTitle">Login</span>
                        <form className='loginForm' onSubmit={handleSubmit}>
                          <label htmlFor="email">UserName</label>
                          <input type="text"   name='username' placeholder='Enter your user name....' className='loginInput'
                            /*  onChange={e=>setUsername(e.target.value)} */
                              ref={userRef}
                          />
                          <label htmlFor="password">Password</label>
                          <input type="password" name='password' placeholder='Enter your password..' className='loginInput'
                         /*   onChange={e=>setPassword(e.target.value)} */
                            ref={passwordRef}
                          />
                          <button type="submit" className='loginButton' disabled={isFetching}>Login</button>                          
                        </form>
                          <button className='loginregistrationButton'><Nav.Link className='loginregistrationButton' as={Link} to="/registration" style={{color:'inherit'}}>Registration</Nav.Link></button>                          
                    </div>

               </div>
        );
}

export default Login;