import * as React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch} from "react-redux";
import {drawerMobileOpened} from "../drawer/navigation-drawer.slice";

const Header = () => {
    const dispatch = useDispatch();

    return (
        <>
            <AppBar position="relative"
                    sx={{
                        display: {
                            md: 'block',
                            lg: 'none'
                        }
                    }}>
                <Toolbar>
                    <IconButton
                        onClick={() => dispatch(drawerMobileOpened())}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            mr: 2
                        }}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;