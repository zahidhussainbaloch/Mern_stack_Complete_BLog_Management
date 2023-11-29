import React from "react";
import { useEffect,useState,useContext } from "react";

import {useLocation,Link} from "react-router-dom";

import { Context } from '../../Components/context/Context';
import axios from "axios";


import "./SinglePost.css";
import { error } from "jquery";



const SinglePost = () => {

    
    
    
    
    const location = useLocation();
    //console.log(location.pathname.split("/")[2]);
    const path = location.pathname.split("/")[2];
    const [post, setpost]=useState({});
    const PF = "http://localhost:8000/images/";
    const {user} = useContext(Context);
    
    const [title, setTitle] = useState("");
    const [desc, setDesc]  = useState("");
    const [updateMode, setUpdateMode] = useState(false);




      useEffect( ()=>{

            const getPost = async()=>{
                const res = await axios.get('/posts/' + path);

                 setpost(res.data);

                 setTitle(res.data.title);
                 setDesc(res.data.desc)


               // console.log(res.data);

            }

            getPost();

      },[path])


    const handleDelete = async (e)=>{

                e.preventDefault();

        try{
            await axios.delete(`/posts/${post._id}`, {data:{username:user.username}});
            
            window.location.replace("/");

        }catch(error){ }
    }

    const handleUpdate = async (e)=>{
            e.preventDefault();

            alert("Update post");

            try{
                await axios.put(`/posts/${post._id}`,{
                    username:user.username,
                    title,
                    desc,
                   
                });
             
                //window.location.replace("/");
                setUpdateMode(false);
            }catch(error){

             }


    }

        return (
               
                <div className="singlepost">
                        <div className='singlepostWarapper'>
                        {post.photo && (

                            <img  src={PF +post.photo} alt="" className="singlepostimage" />
                        )} {
                            updateMode ? <input type="text"  value={title}  className='singlePostTItleInput' autoFocus onChange={(e)=>setTitle(e.target.value)} /> : (
                         
                                
                                
                                <h1 className="singlePostTItle">
                                        {title}
                                        {post.username === user.username && (
                                        <div className="singleposteEdite">

                                            <i className=" SinglePostIcon fa-solid fa-pen-to-square" onClick={()=>setUpdateMode(true)} ></i>
                                            <i  className="SinglePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
                                        
                                        </div>
                                        ) }

                                </h1>

                           )} 

                        <div className="singlePostInfo">
                            <span className='SinglePostAuthor'>Author:
                             <Link style={{textDecoration: 'none', color:'gray'}}  to={`/?user=${post.username}`}>
                             <b> {post.username} </b>
                             </Link>
                             </span>
                            <span className='SinglePostDate'>{new Date(post.createdAt).toDateString()}</span>
                        </div>
                        {updateMode ? (<textarea className="singlePostDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)} />
                        ) : (
                            
                            <p className="SinglePostDesc">
                            {desc}
                            </p>
                        )}

                        { updateMode && (
                                <button className="singlePostButton" onClick={handleUpdate} >Update</button>
                            )}
                    </div>       
                </div>  
        );

}

export default SinglePost;