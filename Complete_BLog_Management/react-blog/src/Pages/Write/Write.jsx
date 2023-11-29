import axios from 'axios';
import React from 'react';
import {useContext, useState} from 'react';
import { Context } from '../../Components/context/Context';

import './Write.css';


const Write = () => {

       const [title,settitle]=useState("");
       const [desc,setdesc]=useState("");
       const [file,setfile]=useState(null);
       const {user} = useContext(Context);

       const handleSubmit = async (e)=>{
              e.preventDefault();
              
              console.log(title);
              const newPost= {
                       username:user.username,
                       title,
                       desc, 
              };

              if(file){
                            const data = new FormData();
                            const fileName = Date.now() + file.name;
                            data.append("name",fileName);
                            data.append("file", file);
                            newPost.photo = fileName;

                            try{

                         const   res =  await axios.post("/upload", data);

                           console.log( res.data);

                            }catch(error)
                            {

                            }

                     }

                     try{
                            const Res = await axios.post('/posts', newPost); 
                            
                            window.location.replace('/Single/'+Res.data._id);
                            
                     }catch(error){

                     }

              

       }
      
       return (
                <div className="write">
                     {file && (
                            
                            <img src={URL.createObjectURL(file)} alt="" className="writeimg" />
                     )}
                   
                    <form className="writeForm" onSubmit={handleSubmit}>
                         <div className="writeFormGroup">
                            <label htmlFor="fileinput"><i className="writeIcon fa-solid fa-plus"></i></label>
                            
                            <input type="file" name='fileinput'  id='fileinput' className="writeinput"  style={{display:'none'}} onChange={(e)=>setfile(e.target.files[0])} />
                            <input type='text' name='title'     id='title'     className='writeinput' placeholder='title' autoFocus={true}  onChange={e=>settitle(e.target.value)} />
                         </div>
                         <div className="writeFormGroup">
                                <textarea placeholder='tell Your......Story' type='text' name='desc' className='writeinput writeText' onChange={(e)=>setdesc(e.target.value)}></textarea>
                         </div>
                         <button className="writesubmit" type='submit' >Publish</button>
                    </form>
                </div>
       );
}


export default Write;