
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function Header() {
    return (
        <>
            <Navbar expand="lg" variant="light" bg="light" >
                <Container>

                    <Navbar.Brand href="/">Upshift</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">peronel</Nav.Link>
                            <Nav.Link href="/">buisiness</Nav.Link>
                        </Nav>
                        <Nav className="mr-auto">
                            <Nav.Link href="/" style={{ paddingLeft: '15px', paddingRight: '15px' }}> about </Nav.Link>
                            <Nav.Link href="/" style={{ paddingLeft: '15px', paddingRight: '15px' }}>pricing</Nav.Link>
                            <Nav.Link href="/" style={{ paddingLeft: '15px', paddingRight: '15px' }}>FAQ</Nav.Link>
                            <Nav.Link href="/contactus" style={{ paddingLeft: '15px', paddingRight: '15px' }}>contact us </Nav.Link>
                        </Nav>
                        <Nav className="mr-auto">

                            <Nav.Link href="/" onClick={() => window.open('http://localhost:3000/login', 'Data', '_blank', 'height=250,width=250')}>login </Nav.Link>
                        </Nav>
                        <Button style={{
                            borderRadius: '19px',
                            backgroundColor: '#d8d8e1',
                            border: '0'
                        }} variant="secondary" href="/join">join now </Button>

                    </Navbar.Collapse>
                    {/*                     
                    <Navbar.Brand href="#">Navbar</Navbar.Brand> */}
                </Container>
            </Navbar>


        </>
    );
}

export default Header;

