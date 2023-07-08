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
                    <NavLink to="/website/resume" activeStyle>
                        Resume
                    </NavLink>
                    <NavLink to="/website/calculator" activeStyle>
                        Calculator
                    </NavLink>
                    <NavLink to="/website/gym" activeStyle>
                        Gym
                    </NavLink>
                    <NavLink to="/website/quiz" activeStyle>
                        Quiz
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;