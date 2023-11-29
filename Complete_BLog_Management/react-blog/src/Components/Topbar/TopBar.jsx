import React, { useContext } from 'react';

import { Context } from '../context/Context';
import './TopBar.css';

import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const TopBar = () =>{
      
      const {user,dispatch} = useContext(Context);

      const handleLogout = () =>{
            dispatch({type:'LOGOUT'})
      }

      return(
              <>
                    <div className='top'>

                        <div className='topLeft'>

                        <i className=" TopIcon fa-brands fa-facebook"></i>
                        <i className=" TopIcon fa-brands fa-twitter"></i>
                        <i className=" TopIcon fa-brands fa-pinterest"></i>
                        <i className=" TopIcon fa-brands fa-instagram-square"></i>

                        
                                  
                                    <Navbar.Brand as={Link} to="/" ><img className="topbarlogoImage"  src="https://www.onblastblog.com/wp-content/uploads/2017/08/blogger-logo.jpg" alt="" />
                                    </Navbar.Brand>
                                    
                        </div>
                        <div className='topCenter'>
                              
                               <ul className="toplist">

                                     <li className="toplistitems">
                                     <Nav.Link as={Link} to="/" style={{color:'inherit'}}>Home</Nav.Link>
				        
                                    </li>
                                    <li className="toplistitems">
                                    <Nav.Link as={Link} to="/Aboutus" style={{color:'inherit'}}>AboutUs</Nav.Link>
				        
                                    </li>
                                    <li className="toplistitems">
                                    <Nav.Link as={Link} to="/Contactus" style={{color:'inherit'}}>ContactUs</Nav.Link>
				       
                                    </li>
                                     <li className="toplistitems">
                                           
                                     <Nav.Link as={Link} to="/Write" style={{color:'inherit'}}>Write</Nav.Link>
				           
                                    </li>
                                     <li className="toplistitems" onClick={handleLogout}>
                                        
                                     {user && "LogOut" }

                                     </li>
                                     
                               </ul>
                               
                        </div>
                        <div className='topRight'>
                               
                           {
                             user ?(
                                   <Link to='/settings'>
                                   <img className="topimage" src={user.profilePic} alt=""   />
                                   </Link>       
                             ):(
                              <>
                                <Nav.Link as={Link} to="/login" style={{color:'inherit'}}>Login</Nav.Link>
                                <Nav.Link as={Link} to="/registration" style={{color:'inherit'}}>Registration</Nav.Link>
                              </>
				      
                              
                             )   
                           }    
                               
                               <i class="TopSearchIcon fa-solid fa-magnifying-glass"></i> 
                        </div>

                    </div>
              </>
            );
}


export default TopBar;