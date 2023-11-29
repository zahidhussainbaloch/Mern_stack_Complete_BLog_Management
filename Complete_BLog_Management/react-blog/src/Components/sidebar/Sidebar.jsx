import React from 'react';
import { useState, useEffect } from 'react';

import {Link} from 'react-router-dom';
import axios from 'axios';

import './Sidebar.css';

const Sidebar = ()=>{
    
     const [cats, setcats]=useState([]);

     useEffect( () =>{
       const getCats = async() => { 
             
        const res = await axios.get('/categories');

           setcats(res.data);

       };  

       getCats();

     },[])

    return (
         
           <div className='sidebar'>
                <div className="sidebarItem">
                    <span className="sidebarTitle">About~Me</span>
                    <img style={{width:'20%', height:'20%'}} className="aboutmeimage" src="https://www.whatsappimages.in/wp-content/uploads/2021/12/girl-New-Superb-Whatsapp-Dp-Profile-Images-photo.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Nostrum molestiae corrupti, hic ad enim consequuntur asperiores voluptate,
                        accusamus ex voluptatem qui, cupiditate perferendis sed dicta eveniet explicabo
                        deserunt mollitia perspiciatis.</p>
                </div>
                <div className='sidebarItem'>
                    <span className="sidebarTitle">Categories</span>
                    <ul className="sidebarList">
                        {cats.map( (c)=>(
                            <li className="sidebarListItems">
                                <Link to={`/?cat=${c.name}`}>
                                        {c.name}
                                </Link>

                            </li>
                        ))}
                        <li className="sidebarListItems">Music</li>
                        <li className="sidebarListItems">Style</li>
                        <li className="sidebarListItems">Sport</li>
                        <li className="sidebarListItems">Techology</li>
                        <li className="sidebarListItems">Other</li>
                    </ul>            
                </div>
                <div className='sidebarItem'>
                    <span className="sidebarTitle">Follow Us</span>
                     <div className="sidebarSocial">
                        <i class=" sidebarIcon fa-brands fa-facebook"></i>
                        <i class=" sidebarIcon fa-brands fa-twitter"></i>
                        <i class=" sidebarIcon fa-brands fa-pinterest"></i>
                        <i class=" sidebarIcon fa-brands fa-instagram-square"></i>


                     </div>
                </div>

           </div>
    );
}

export default Sidebar;