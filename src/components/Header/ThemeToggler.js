import React, {useContext} from 'react';
import {WindmillContext} from '@windmill/react-ui';
import {MoonIcon, SunIcon} from '@heroicons/react/solid';

function ThemeToggler() {
    const {mode, toggleMode} = useContext(WindmillContext);
    return (
        <>
            <div className="flex">
                <button
                    className="rounded-md focus:outline-none focus:shadow-outline-purple"
                    onClick={toggleMode}
                    aria-label="Toggle color mode"
                >
                    {mode === 'dark' ? (
                        <SunIcon className="w-5 h-5" aria-hidden="true" />
                    ) : (
                        <MoonIcon className="w-5 h-5" aria-hidden="true" />
                    )}
                </button>
            </div>
        </>
    );
}

export default ThemeToggler;
