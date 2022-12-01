import React from "react";
import NavBar from "./Navbar";
import NavPanel from "./NavPanel";
import "./header_styles.css";

class Header extends React.Component{

    render() {
        return (
            <header>
                <NavBar></NavBar>
                <NavPanel></NavPanel>
            </header>
        )
    }
}

export default Header;