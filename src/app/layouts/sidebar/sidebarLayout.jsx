import Router from "../../router/router";
import Header from "../../components/header/header";
import NavigationDrawer from "../../components/navigation-drawer/navigation-drawer";
import './sidebar.scss';

export default function SidebarLayout() {
    return (
        <>
            <div className="flex-1 flex flex-row overflow-hidden relative">
                <NavigationDrawer/>
                <div className="flex flex-1 flex-col overflow-hidden">
                    <Header/>
                    <main className="flex flex-1 overflow-hidden">
                        <Router/>
                    </main>
                </div>
            </div>
        </>
    )
}
