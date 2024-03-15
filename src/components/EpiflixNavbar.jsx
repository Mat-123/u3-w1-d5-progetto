import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import { BsSearch, BsBell, BsPerson } from "react-icons/bs";

function EpiflixNavbar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="p-0">
      <Container fluid>
        <Navbar.Brand href="#home" className="p-0">
          <img src={logo} alt="#logo" height="70" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tvshows">TV Shows</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#RecentlyAdded">Recently Added</Nav.Link>
            <Nav.Link href="#MyList">My List</Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            <BsSearch className="icons" />
            <Nav.Link href="#Kids">KIDS</Nav.Link>
            <BsBell className="icons" />
            <BsPerson className="icons" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EpiflixNavbar;
