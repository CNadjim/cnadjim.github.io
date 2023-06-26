import './default-layout.scss';
import Router from "../router/router";
import NavigationHeader from "../components/header/header";
import NavigationDrawer from "../components/drawer/navigation-drawer";

const DefaultLayout = () => {
    return (
        <>
            <div className="flex bg-white">
                <NavigationDrawer/>
            </div>

            <div className="flex flex-1 flex-col">
                <div className="flex-none z-10">
                    <NavigationHeader/>
                </div>
                <div className="flex flex-1 flex-grow overflow-auto content" >
                    <Router/>
                </div>
            </div>
        </>
    );
};
export default DefaultLayout;