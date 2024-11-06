import {useDispatch, useSelector} from "react-redux";
import {closeMobileDrawer, selectMobileDrawerState} from "../../reducers/navigation-drawer";
import {Dialog, Transition} from "@headlessui/react";
import React, {Fragment} from "react";
import {
    AcademicCapIcon,
    BriefcaseIcon,
    EnvelopeIcon,
    FolderIcon,
    HomeIcon,
    XMarkIcon
} from "@heroicons/react/24/outline";
import "./navigation-drawer.scss"
import {Link, useLocation} from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const navigation = [
    {name: 'Home', href: '/home', icon: HomeIcon},
    {name: 'Service', href: '/service', icon: BriefcaseIcon},
    {name: 'Portfolio', href: '/portfolio', icon: FolderIcon},
    {name: 'Curriculum vitae', href: '/curriculum', icon: AcademicCapIcon},
    {name: 'Contact me', href: '/contact', icon: EnvelopeIcon},
]

const NavigationContent = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    return (
        <>
            {
                navigation.map((item, key) => (
                    <Link
                        to={item.href}
                        key={key}
                        onClick={() => dispatch(closeMobileDrawer())}
                        className={classNames(item.href === location.pathname ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-base font-medium rounded-md')}>
                        <item.icon
                            className={classNames(item.href === location.pathname ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-4 flex-shrink-0 h-6 w-6')}
                            aria-hidden="true"/>
                        {item.name}
                    </Link>
                ))}
        </>
    )
}

const NavigationDrawer = () => {
    const dispatch = useDispatch();
    const isMobileDrawerOpened = useSelector(selectMobileDrawerState);
    return (
        <>

            <Transition.Root show={isMobileDrawerOpened} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={() => dispatch(closeMobileDrawer())}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-75"/>
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0">
                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                        <button
                                            type="button"
                                            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                            onClick={() => dispatch(closeMobileDrawer())}>
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                                    <nav className="mt-5 px-2 space-y-4">
                                        <NavigationContent/>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        <div className="w-14 flex-shrink-0">

                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            <div className="hidden flex-none lg:flex lg:flex-col drawer border-r border-gray-200 bg-white">
                <div className="flex min-h-0 flex-1 flex-col">
                    <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                        <nav className="my-auto mx-10 px-2 space-y-4">
                            <NavigationContent/>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}


export default NavigationDrawer;