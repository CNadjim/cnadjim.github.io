import * as React from 'react';
import {AppBar, Divider, IconButton, Toolbar, Typography} from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch} from "react-redux";
import {drawerMobileOpened} from "../drawer/navigation-drawer.slice";

const Header = () => {
    const dispatch = useDispatch();

    return (
        <>
            <AppBar position="relative"
                    color="transparent"
                    enableColorOnDark={true}
                    elevation={0}
                    sx={{
                        display: {
                            md: 'block',
                            lg: 'none'
                        }
                    }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    </Typography>
                    <IconButton
                        onClick={() => dispatch(drawerMobileOpened())}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            ml: 1
                        }}>
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Divider/>
        </>
    );
};

export default Header;