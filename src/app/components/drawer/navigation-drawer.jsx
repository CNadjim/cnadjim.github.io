import * as React from 'react';
import "./navigation-drawer.scss";
import {Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar} from "@mui/material";
import Drawer from '@mui/material/Drawer';
import {useDispatch, useSelector} from "react-redux";
import {drawerMobileClosed, selectMobileNavigationDrawer} from "./navigation-drawer.slice";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import {NavLink, useLocation} from "react-router-dom";
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';

const CustomListItemButton = ({to, icon, primary, disabled = false}) => {
    const location = useLocation();
    return (
        <>
            <ListItemButton component={NavLink} to={to} selected={to === location.pathname} disabled={disabled}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText className="font-montserrat" primary={primary}/>
            </ListItemButton>
        </>
    );
}

const CustomListItem = ({children}) => {
    const dispatch = useDispatch();
    return (
        <>
            <ListItem disablePadding onClick={() => dispatch(drawerMobileClosed())}>
                {children}
            </ListItem>
        </>
    );
}
const NavigationDrawer = () => {
    const dispatch = useDispatch();
    const mobileDrawerOpen = useSelector(selectMobileNavigationDrawer);
    const drawerContent = (
        <>
            <List>
                <CustomListItem>
                    <CustomListItemButton to="/home" primary="Home" icon={<HomeIcon/>}/>
                </CustomListItem>
                <CustomListItem>
                    <CustomListItemButton to="/about" primary="About" icon={<InfoIcon/>} disabled={true}/>
                </CustomListItem>
                <CustomListItem>
                    <CustomListItemButton to="/portfolio" primary="Portfolio" icon={<WorkIcon/>} disabled={true}/>
                </CustomListItem>
                <CustomListItem>
                    <CustomListItemButton to="/contact" primary="Contact" icon={<EmailIcon/>} disabled={true}/>
                </CustomListItem>
            </List>
        </>
    );

    return (
        <>
            <Drawer
                variant="temporary"
                open={mobileDrawerOpen}
                onClose={() => dispatch(drawerMobileClosed())}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: {
                        md: 'flex',
                        lg: 'none'
                    },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        minWidth: "250px",
                        width: {
                            xs: '50%'
                        }
                    },
                }}>
                <Toolbar/>
                <Divider/>
                {drawerContent}
            </Drawer>

            <Box
                className="flex border border-r-gray overflow-hidden"
                sx={{
                    width: {
                        lg: 350,
                        xl: 450
                    },
                    display: {
                        xs: 'none',
                        lg: 'flex'
                    }
                }}>
                <div className="flex flex-1 flex-col">
                    <div className="flex flex-1 flex-col justify-center">
                        {drawerContent}
                    </div>
                    <Divider/>
                    <p className="font-montserrat text-[15px] leading-[25px] text-[#999] text-center mb-10 mt-10">
                        © 2023 Chabane Nadjim
                    </p>

                </div>
            </Box>
        </>
    )
};

export default NavigationDrawer;