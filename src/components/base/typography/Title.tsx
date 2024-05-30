import React, { ReactNode } from 'react';

const Title = ({ children }: { children: ReactNode }): JSX.Element => {
    return (
        <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">{children}</h2>
    );
};

export default Title;
