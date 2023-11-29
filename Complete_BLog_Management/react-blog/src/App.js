import logo from './logo.svg';
import './App.css';

import Home from './Pages/Home/Home';

import TopBar from './Components/Topbar/TopBar';
// import SinglePost from './Components/SinglePost/SinglePost';
import Single from './Pages/Single/Single';
import Post from './Components/Post/Post';

import { Row,Col, Container } from 'react-bootstrap';
import Write from './Pages/Write/Write';
import Settings from './Pages/Settings/Settings';

import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';




import {BrowserRouter, Routes, Route} from 'react-router-dom'


const User = false;

function App() {
  return (           
       <div>
          <BrowserRouter>
              <TopBar />

              <Routes>
                    <Route exact="true" path="/" element={<Home />} />
                    <Route path="/login" element={User ? <Home/> :  <Login />} />
                    <Route path="/registration" element={User ? <Home/> : <Registration />} />
                    <Route path="/Write" element={User ? <Home/> : <Write />} />
                    <Route path="/Settings" element={User ? <Home /> : <Settings />} />
                    <Route path="/Single/:id" element={<Single />} />
                    <Route path="/post/:id" element={<Post />} />
            </Routes>
               
        </BrowserRouter>
    
       </div>
      
  );
}

export default App;
