import SidebarLayout from "./layouts/sidebar/sidebar-layout";
import ThemeProvider from "./providers/theme-provider/theme-provider";

const App = () => {
    return (
        <>
            <ThemeProvider>
                <SidebarLayout/>
            </ThemeProvider>
        </>
    );
}

export default App;