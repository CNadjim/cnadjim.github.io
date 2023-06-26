import {createSlice} from "@reduxjs/toolkit";

export const navigationDrawerSlice = createSlice({
    name: 'navigationDrawer',
    initialState: {
        desktopOpen: true,
        mobileOpen: false,
    },
    reducers: {
        drawerDesktopOpened: (state, action) => {
            state.desktopOpen = true;
        },
        drawerDesktopClosed: (state, action) => {
            state.desktopOpen = false;
        },
        drawerMobileOpened: (state, action) => {
            state.mobileOpen = true;
        },
        drawerMobileClosed: (state, action) => {
            state.mobileOpen = false;
        }
    },
})

export const {
    drawerDesktopOpened,
    drawerDesktopClosed,
    drawerMobileOpened,
    drawerMobileClosed
} = navigationDrawerSlice.actions;

export const selectDesktopNavigationDrawer = (state) => state.navigationDrawer.desktopOpen;
export const selectMobileNavigationDrawer = (state) => state.navigationDrawer.mobileOpen;
export default navigationDrawerSlice.reducer