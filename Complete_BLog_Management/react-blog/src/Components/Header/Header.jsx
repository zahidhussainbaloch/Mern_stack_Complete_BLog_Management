import React from 'react';

import "./Header.css";

const Header = ()=>{
      
     return(
           
            <div className='header'>
                <div className="headertitles">
                    <span className="headerTitleSm">React & Node</span>
                    <span className="headerTitleLg">Blog</span>
                </div>
                <img className="headerImage" src="https://sasspics.thesassway.com/how-to-make-a-photo-a-background-css-.jpg" alt="" />
            </div>
     );
}

export default Header;