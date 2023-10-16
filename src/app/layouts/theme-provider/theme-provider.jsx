import {useDispatch, useSelector} from "react-redux";
import {selectDarkMode} from "../../reducers/theme";
import {useEffect} from "react";

export const ThemeContext = createContext()
export const ThemeProvider = ({children}) => {
    const prefersDarkMode = usePrefersDarkMode()
    const dispatch = useDispatch();
    const isDarkMode = useSelector(selectDarkMode);

    useEffect(() => {
        if (window === undefined) return
        const root = window.document.documentElement
        root.classList.remove(enabled ? 'light' : 'dark')
        root.classList.add(enabled ? 'dark' : 'light')
    }, [enabled])

    return (
        <>
            {children}
        </>
    )
}

export default ThemeProvider