import React, {useContext} from 'react';
import {SidebarContext} from '../../contexts/SidebarContext';
import {SearchIcon, MenuIcon} from '@heroicons/react/outline';
import Profile from './Profile';
import Notifications from './Notifications';
import ThemeToggler from './ThemeToggler';
import ChatNotifications from './ChatNotifications';

function Header() {
    const {toggleSidebar} = useContext(SidebarContext);

    return (
        <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
            <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                {/* <!-- Mobile hamburger --> */}
                <button
                    className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
                    onClick={toggleSidebar}
                    aria-label="Menu"
                >
                    <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </button>
                {/* <!-- Search input --> */}
                <div className="flex justify-center">
                    <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                        <div className="absolute inset-y-0 flex items-center pl-2">
                            <SearchIcon className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <input
                            type="search"
                            className="pl-8 text-gray-700 text-sm"
                            placeholder="Search for projects"
                            aria-label="Search"
                        />
                    </div>
                </div>
                <div className="flex items-center pr-2">
                    {/* Theme toggler*/}
                    <ThemeToggler />
                    {/* Chat notifications */}
                    <ChatNotifications />
                    {/* Notifications dropdown */}
                    <Notifications />
                    {/* Profile dropdown */}
                    <Profile />
                </div>
            </div>
        </header>
    );
}

export default Header;
