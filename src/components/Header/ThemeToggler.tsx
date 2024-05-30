import React, { useContext } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { ThemeContext } from '../../contexts/ThemeContext';

const ThemeToggler = (): JSX.Element => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <>
            <div className="flex">
                <button
                    className="rounded-md focus:outline-none focus:shadow-outline-purple"
                    aria-label="Toggle color mode"
                >
                    {theme === 'dark' ? (
                        <SunIcon
                            className="w-5 h-5"
                            aria-hidden="true"
                            onClick={() => setTheme('light')}
                        />
                    ) : (
                        <MoonIcon
                            className="w-5 h-5"
                            aria-hidden="true"
                            onClick={() => setTheme('dark')}
                        />
                    )}
                </button>
            </div>
        </>
    );
};

export default ThemeToggler;
