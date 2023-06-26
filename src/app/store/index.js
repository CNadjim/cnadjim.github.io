import {configureStore} from "@reduxjs/toolkit";
import navigationDrawerReducer from "../components/drawer/navigation-drawer.slice";

export default configureStore({
    reducer: {
        navigationDrawer: navigationDrawerReducer,
    },
});
