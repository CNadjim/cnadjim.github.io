import {configureStore} from "@reduxjs/toolkit";

import navigationDrawerReducer from "../reducers/navigation-drawer";
import themeReducer from "../reducers/theme";
export default configureStore({
    reducer: {
        navigationDrawer: navigationDrawerReducer,
        theme: themeReducer
    },
});