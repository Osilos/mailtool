import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import { Link } from "react-router-dom";

class MainMenu extends Component {
    render() {
        return (
            <div>
                <Link to="/">FIRST</Link>
                <Link to="/change">SECOND</Link>
            </div>
        );
    }
}

export default MainMenu;
