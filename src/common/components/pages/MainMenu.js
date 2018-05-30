import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { Link, NavLink } from 'react-router-dom';
import { Toolbar, IconButton, Icon } from 'material-ui';

const headerStyle = {};

const elementStyle = {
    color: 'inherit'
};
const toolBarStyle = {
    display: 'flex',
    justifyContent: 'space-between'
};

class MainMenu extends Component {
    isHomeActive(match, location) {
        if (location.pathname === '/' || location.pathname === '') return true;
        if (!match) {
            return false;
        }
        if (location.pathname === match.path) return true;
        return false;
    }

    render() {
        return (
            <Grid item container xs={12}>
                <AppBar position="static">
                    <Toolbar style={toolBarStyle}>
                        <div>
                            <NavLink
                                to="/home"
                                activeStyle={{
                                    color: 'white'
                                }}
                                isActive={this.isHomeActive.bind(this)}
                            >
                                <IconButton style={elementStyle}>
                                    <Icon style={elementStyle}>home</Icon>
                                </IconButton>
                            </NavLink>
                            <NavLink
                                to="/help"
                                activeStyle={{
                                    color: 'white'
                                }}
                            >
                                <IconButton style={elementStyle}>
                                    <Icon style={elementStyle}>help</Icon>
                                </IconButton>
                            </NavLink>
                            <NavLink
                                activeStyle={{ color: 'white' }}
                                to="/demo"
                            >
                                <Button style={elementStyle}>Demo</Button>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                activeStyle={{ color: 'white' }}
                                to="/signin"
                            >
                                <Button style={elementStyle}>Sign In</Button>
                            </NavLink>
                            <NavLink
                                activeStyle={{ color: 'white' }}
                                to="/signup"
                            >
                                <Button style={elementStyle}>Sign up</Button>
                            </NavLink>
                        </div>
                    </Toolbar>
                </AppBar>
            </Grid>
        );
    }
}

export default MainMenu;
