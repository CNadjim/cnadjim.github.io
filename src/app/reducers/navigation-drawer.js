import {createSlice} from "@reduxjs/toolkit";

export const navigationDrawer = createSlice({
    name: 'navigationDrawer',
    initialState: {
        desktopDrawerOpened: false,
        mobileDrawerOpened: false,
    },
    reducers: {
        openDesktopDrawer: (state, action) => {
            state.desktopDrawerOpened = true;
        },
        closeDesktopDrawer: (state, action) => {
            state.desktopDrawerOpened = false;
        },
        openMobileDrawer: (state, action) => {
            state.mobileDrawerOpened = true;
        },
        closeMobileDrawer: (state, action) => {
            state.mobileDrawerOpened = false;
        }
    }
})

export const {
    openDesktopDrawer,
    closeDesktopDrawer,
    openMobileDrawer,
    closeMobileDrawer
} = navigationDrawer.actions;

export const selectDesktopDrawerState = (state) => state.navigationDrawer.desktopDrawerOpened;
export const selectMobileDrawerState = (state) => state.navigationDrawer.mobileDrawerOpened;

export default navigationDrawer.reducer