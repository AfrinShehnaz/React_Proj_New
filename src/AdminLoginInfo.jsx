import React, { useState, Fragment } from 'react';
import { Navbar, Nav, Form, FormControl, Container, Button, Row, Col, Toast, Card, Carousel, Figure, CardGroup } from 'react-bootstrap';


import { Link } from 'react-router-dom';

function LoginInfo(props) {
    const [show, setShow] = useState(false);
    return (
        <div className="adminbg" >
            <Fragment>
                <Navbar bg="light" expand="lg" sticky="top">
                    <Navbar.Brand href="#home" >Retail Banking Center</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Form inline>
                            {/*<FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}

                            <Row>
                            <Col xs={6}>
                                <Button onClick={() => setShow(true)} >LOGIN</Button>
                            </Col>
                        </Row>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>



                <Row style={{ marginLeft: '35%' }}>
                    <Col xs={6}>

                    <Toast onClose={() => setShow(false)} show={show} delay={600000} autohide>
                            <Toast.Header>
                                <img
                                    src=""
                                    className="rounded mr-2"
                                    alt=""
                                />
                                <strong className="mr-auto"><b>Personal Home Page</b></strong>
                                <small>just now</small>
                            </Toast.Header>
                            <Toast.Body>
                                
                            <Link class="btn btn-info mr-2" to='/admin'>Admin Login</Link><br/><br/>
                            <Link class="btn btn-info mr-2" to='/user'>User Login</Link> 
                                
                            </Toast.Body>
                        </Toast>

                    </Col>
                </Row>

            </Fragment>
        </div>
    )
}

export default LoginInfo;