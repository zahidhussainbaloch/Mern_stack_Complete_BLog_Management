import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../../Components/Header/Header';
import Posts from '../../Components/Posts/Posts';
import Sidebar from '../../Components/sidebar/Sidebar';

import {useLocation} from 'react-router-dom';


import "./Home.css";

const Home = ()=>{

       const [posts, setPosts]= useState([])

        const {search} = useLocation();

     console.log(search)
     
      //  const [city, setCity] = useState({})

       useEffect( ()=>{
            const fetchPosts = async ()=>{
                const result = await axios.get("/posts" + search);

                 //console.log(result.data);

                setPosts(result.data);
               
            }

            fetchPosts();
      },[search]); 

      
      //console.log(posts);
      return(
            <>
                   <Header />
              <div className="home">
                    <Posts posts={posts} />
                    <Sidebar />
              </div>
            
            </>
      );
}

export default Home;