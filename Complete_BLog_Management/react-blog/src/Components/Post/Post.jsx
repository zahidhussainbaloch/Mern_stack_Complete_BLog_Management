import React from 'react';

import {Link} from 'react-router-dom';

import "./Post.css";




const Post =({post})=>{

      const PF = "http://localhost:8000/images/";

  //   console.log(profile);

       return (
                 
                  <div className="post">
                       {post.photo && (

                            <img className="PostImage" src={PF + post.photo} alt="Post Image" />
                       )}

                     <div className="postinfo">
                        <div className="postCats">
                              {post.categories.map((c)=>(

                                   
                                   <span className="postCat">{c.name}</span>
                              ))}
                         
                        </div>
                         <Link style={{textDecoration: 'none', color:'gray'}}  to={`/Single/${post._id}`} >
                        <span className="postTitle">{post.title}</span></Link>
                        <hr/>
                        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                        <p className='postDec'>
                             {post.desc}
                        </p>
                     </div>

                  </div>

             );
}
export default Post;
