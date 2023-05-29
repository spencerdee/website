import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/website" activeStyle>
                        Spencer Dee
                    </NavLink>
                    <NavLink to="/website/calculator" activeStyle>
                        Calculator
                    </NavLink>
                    <NavLink to="/website/gym" activeStyle>
                        Gym
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;