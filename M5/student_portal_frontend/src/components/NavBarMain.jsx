import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";

function NavBarMain() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Student Portal</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link><Link className="text-white" to="/">Home</Link></Nav.Link>
        <Nav.Link>Students</Nav.Link>
        
          <Nav.Link><Link className="text-white" to="/student-form/new">Add New Student </Link></Nav.Link>
       
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}

export default withRouter(NavBarMain);
