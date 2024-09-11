import * as React from 'react';
import {useDispatch} from "react-redux";
import {Bars3Icon} from "@heroicons/react/24/outline";
import {openMobileDrawer} from "../../reducers/navigation-drawer";
import './header.scss';
const Header = () => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="header flex sticky z-20 bg-white border-b top-0 z-10 bg-gray-100 pl-5 lg:hidden">
                <button
                    type="button"
                    className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => dispatch(openMobileDrawer())}>
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                </button>
            </div>
        </>
    );
};

export default Header;