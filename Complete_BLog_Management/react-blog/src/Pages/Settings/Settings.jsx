import React, { useContext, useState } from 'react';

import Sidebar from '../../Components/sidebar/Sidebar';

import { Context } from '../../Components/context/Context';

import {Col, Row, Container} from 'react-bootstrap'

import axios from 'axios';

import './Settings.css';
import userEvent from '@testing-library/user-event';
  

const Settings = () => {
    // const {user} = useContext(Context);

    


    const [file,setFile]=useState(null);
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [success,setsuccess]=useState(false);



    const {user, dispatch} = useContext(Context);

    const handleSubmit = async (e)=>{
           e.preventDefault();
           dispatch({type: 'Update_START'});
           const updatedUser= {
                    userId:user._id,
                    username,
                    email,
                    password, 
           };

           if(file){
                         const data = new FormData();
                         const fileName = Date.now() + file.name;
                         data.append("name",fileName);
                         data.append("file", file);
                         updatedUser.profilePic = fileName;

                         try{

                      const   res =  await axios.post("/upload", data);

                        console.log( res.data);

                         }catch(error)
                         {

                         }

                  }

                  try{
                         const res = await axios.put('/users/'+user._id, updatedUser); 
                         
                        //  message="Profile updated successfully";

                        dispatch({type: 'Update_SUCCESS', payload:res.data});

                        if(res)
                        {
                            setsuccess(true)

                        }else{ 
                            setsuccess(false);
                         }

                            

                       //window.location.replace('/'+message);
                         
                        console.log(res.data);

                  }catch(error){

                    dispatch({type: 'Update_FAILURE'});

                  }

           

    }
    
    
    
    return (
           
            <div className="settings">
                 <div className="settingsWrapper">
                   <Container fluid>
                     <Row>
                        <Col>
                            <div className="settingsTitle">
                                <span className="settingsUpdateTitle">Update Your Acount</span>
                            </div>
                            <form className="settingsForm" onSubmit={handleSubmit}>
                             {success && ( <span style={{color:'green',textAlign:"center"}}>Profile Has Been Updated....!</span> )}
                                
                                <label >Profile Picture</label>
                                <div className="SettingsPP">
                                        <img  src={file ? URL.createObjectURL(file) : user.profilePic} alt="" className="" name="profilePic" onChange={(e)=>setFile(e.target.files[0])} />
                                        <label htmlFor="fileInput">
                                            <i className=" settingsPPIcon fa-solid fa-user-clock"></i>
                                        </label>

                                        <input type='file' name='fileInput' id='fileInput'  style={{display: 'none'}} onChange={(e)=>setFile(e.target.files[0])}  />
                                </div>
                                <label > UserName</label>
                                <input type='text' name='userName' id='userName' placeholder={user.username}  onChange={(e)=>setUsername(e.target.value)} />
                                 
                                <label >Email</label>
                                <input type='email' name='email' id='email' placeholder={user.email}   onChange={(e)=>setEmail(e.target.value)} />
                                
                                <label >Passwword</label>
                                <input type='password' name='password' id='password'  onChange={(e)=>setPassword(e.target.value)} />
                                <button className="settingssubmit" type='submit'>Update</button>
                            </form>
                        </Col>
                        <Col sm='3'>
                        <Sidebar />
                        </Col>
                    </Row>
                    </Container> 
                </div>  
            </div>
    );
} 


export default Settings;

