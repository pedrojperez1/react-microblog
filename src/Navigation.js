import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const Navgation = () => {
    return (
        <div className="Navigation">
        <Navbar className="bg-dark navbar-dark">
            <Link to="/"><NavbarBrand>Microblog</NavbarBrand></Link>
            <Nav>
                <NavItem>
                    <Link to="/new" className="Navigation-NavLink">New Post</Link>
                </NavItem>
            </Nav>
        </Navbar>
    </div>
    )
};

export default Navgation;