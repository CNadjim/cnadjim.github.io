import {createSlice} from "@reduxjs/toolkit";

export const theme = createSlice({
    name: 'theme',
    initialState: {
        darkMode: false
    },
    reducers: {
        darkModeActivated: (state) => {
            state.darkMode = true;
        },
        darkModeDeactivated: (state) => {
            state.darkMode = false;
        },
        darkModeToggled: (state) => {
            state.darkMode = !state.darkMode;
        }
    },
})

export const {
    darkModeActivated,
    darkModeDeactivated,
    darkModeToggled
} = theme.actions;

export const selectDarkMode = (state) => state.theme.darkMode;
export default theme.reducer