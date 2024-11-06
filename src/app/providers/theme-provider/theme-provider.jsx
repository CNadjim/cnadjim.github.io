import {useSelector} from "react-redux";
import {selectDarkMode} from "../../reducers/theme";
import {useEffect} from "react";

export const ThemeProvider = ({children}) => {
    const isDarkMode = useSelector(selectDarkMode);
    const root = window.document.documentElement;

    useEffect(() => {
        root.classList.remove('light', 'dark');
        root.classList.add(isDarkMode ? 'dark' : 'light');
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default ThemeProvider