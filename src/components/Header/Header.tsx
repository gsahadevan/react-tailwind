// import React, {useContext} from 'react';
// import {SidebarContext} from '../../contexts/SidebarContext';
// import {MenuIcon} from '@heroicons/react/outline';
// import Profile from './Profile';
// import Notifications from './Notifications';
// import ThemeToggler from './ThemeToggler';

import ChatNotification from "./ChatNotification";
import Notification from "./Notification";
import Profile from "./Profile";
import SearchBox from "./SearchBox";
import ThemeToggler from "./ThemeToggler";

const Header = (): JSX.Element => {
    // const {toggleSidebar} = useContext(SidebarContext);

    return (
        <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
            <div className="container flex items-center justify-between h-full md:px-12 px-4 mx-auto text-purple-600 dark:text-purple-300">
                {/* <!-- Mobile hamburger --> */}
                {/* <button */}
                {/*     className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple" */}
                {/*     onClick={toggleSidebar} */}
                {/*     aria-label="Menu" */}
                {/* > */}
                {/*     <MenuIcon className="w-6 h-6" aria-hidden="true" /> */}
                {/* </button> */}
                {/* <!-- Search input --> */}
                <div className="flex justify-center">
                    <SearchBox />
                </div>
                <div className="flex items-center pr-2 space-x-6">
                    {/* Theme toggler*/}
                    <ThemeToggler />
                    {/* Chat notification */}
                    <ChatNotification />
                    {/* Notification dropdown */}
                    <Notification />
                    {/* Profile dropdown */}
                    <Profile />
                </div>
            </div>
        </header>
    );
}

export default Header;
