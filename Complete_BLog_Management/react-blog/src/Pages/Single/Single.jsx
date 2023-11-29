import React from 'react';
import Sidebar from '../../Components/sidebar/Sidebar';

import SinglePost from '../../Components/SinglePost/SinglePost';


import { Row,Col, Container } from 'react-bootstrap';

import './Single.css'


const Single = () => {
     
        return(

                <div className="single">

                <Container fluid>
                   <Row>
                        <Col>
                                  <SinglePost />
                        </Col>
                        
                     </Row>
                     
                </Container>
                      <Sidebar />
                </div>
        );
}


export default Single;