import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router-dom';

class MainMenu extends Component {
    render() {
        return (
            <Grid item container xs={12}>
                <Link to="/template/first">FIRST</Link>
                <Link to="/template/second">SECOND</Link>
            </Grid>
        );
    }
}

export default MainMenu;
