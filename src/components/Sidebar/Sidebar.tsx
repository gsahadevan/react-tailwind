import { DocumentIcon, HomeIcon, FolderIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = (): JSX.Element => {
    const location = useLocation();
    const iconClasses = 'h-4 w-4 mr-2';
    const routes = [
        {
            path: '/dashboard',
            icon: <HomeIcon className={iconClasses} />,
            name: 'Dashboard'
        },
        {
            path: '/blank',
            icon: <DocumentIcon className={iconClasses} />,
            name: 'Blank Page'
        },
        {
            path: '/components',
            icon: <FolderIcon className={iconClasses} />,
            name: 'Components'
        }
    ];

    return (
        <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block shadow-lg">
            <div className="py-4 text-gray-500 dark:text-gray-400">
                <a
                    className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
                    href="/dashboard"
                >
                    React Tailwind
                </a>
                <ul className="mt-6">
                    {routes.map((route, index) => {
                        console.log(location.pathname, route.path);
                        return (
                            <li key={index} className="px-2 py-1 items-center">
                                <NavLink
                                    end
                                    to={route.path}
                                    className={({ isActive }) =>
                                        `${isActive ? 'font-semibold  bg-base-200' : 'font-normal'}`
                                    }
                                >
                                    <div className="text-sm px-4 py-2 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100 rounded">
                                        {route.icon}
                                        <span>{route.name}</span>
                                    </div>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
