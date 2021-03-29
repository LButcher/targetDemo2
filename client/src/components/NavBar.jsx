import {
    Toolbar,
    AppBar,
    Typography,
    Button,
}
    from '@material-ui/core';
    
import {
    Link
  } from 'react-router-dom';
import React, { Component } from 'react';


class NavBar extends Component {

    render() {
        return (
                <AppBar position="relative">
                    <Toolbar>
                        <Typography variant="h6" className="nav-title-container">
                        <Link id="HomeLink" to={'/'}>Home</Link>
                        <Link id="CategoryLink" to={'/Categories'}>Categories</Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
        )
    }
}
export default NavBar;