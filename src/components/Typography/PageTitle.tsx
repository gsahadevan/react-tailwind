import React, { ReactNode } from 'react'

const PageTitle = ({ children }: { children: ReactNode }): JSX.Element => {
    return <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">{children}</h1>;

};

export default PageTitle;
