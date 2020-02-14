
import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
function First() {
    return (
        <>
            <Container>
                <div style={{ backgroundColor: '#f6f5f8' }}>

                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="6">
                                <form>
                                    <p className="h5 text-center mb-4">Contact us</p>
                                    <div className="grey-text">
                                        <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                                            success="right" />
                                        <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                                            success="right" />
                                        <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                                        <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                                    </div>
                                    <div className="text-center">

                                        <Button style={{
                                            borderRadius: '19px',
                                            backgroundColor: '#d8d8e1',
                                            border: '0'
                                        }} variant="secondary" href="/join">send </Button>
                                    </div>
                                </form>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </Container>


        </>
    );
}

export default First;

