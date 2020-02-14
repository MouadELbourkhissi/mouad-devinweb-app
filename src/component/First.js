
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import logo from '../asserts/firstX.PNG';

function First() {
    return (
        <>
            <Container>
                <div style={{ backgroundColor: '#f6f5f8' }}>
                    <Row>
                        <Col>
                            <div style={{ paddingTop: '120px', paddingLeft: '49px' }}>

                                <div style={{ textAlign: 'left' }}>

                                    <h1 style={{ paddingLeft: '26px' }}>Just drive.
                                    <br />
                                        we'll do the rest.
                                    </h1>
                                    <br></br>
                                    <div style={{ padding: '26px' }}>
                                        <span>
                                            all-include. usage-based car subscriptions
                                        </span>
                                    </div>
                                </div>

                                <Form inline>
                                    <FormControl style={{ border: 'transparent', backgroundColor: '#f6f5f8', borderBottom: '1px solid' }} type="text" placeholder="Phone number ..." className="mr-sm-2" />
                                    <br></br>
                                    <Button style={{ borderRadius: '19px' }} variant="secondary" >Get started </Button>
                                </Form>
                            </div>
                        </Col>

                        <Col >
                            <Image style={{ height: '450px' }} src={logo} rounded />
                        </Col>
                    </Row>

                </div>
            </Container>


        </>
    );
}

export default First;

