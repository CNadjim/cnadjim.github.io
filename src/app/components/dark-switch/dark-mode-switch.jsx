import {useDispatch, useSelector} from "react-redux";
import {darkModeToggled, selectDarkMode} from "../../reducers/theme";
import {DarkModeSwitch} from "react-toggle-dark-mode";

export default function DarkSwitch() {
    const dispatch = useDispatch();
    const isDarkMode = useSelector(selectDarkMode);
    console.log(isDarkMode);
    return (
        <>
            <DarkModeSwitch
                style={{marginBottom: '2rem'}}
                checked={isDarkMode}
                onChange={((changed) => {
                    dispatch(darkModeToggled());
                })}
                size={120}
            />
        </>
    )
}