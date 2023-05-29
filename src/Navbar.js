import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Spencer Dee
                    </NavLink>
                    <NavLink to="/calculator" activeStyle>
                        Calculator
                    </NavLink>
                    <NavLink to="/gym" activeStyle>
                        Gym
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;