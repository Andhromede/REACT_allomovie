// import '../assets/css/navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar(){
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={"home"}>Allo-Movie</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href={"home"}>Home</Nav.Link>
                    <Nav.Link href={""}>Mes favoris</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;