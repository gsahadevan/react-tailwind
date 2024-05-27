import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

const App = (): JSX.Element => {
    return (
        <div className="flex h-screen bg-gray-200 dark:bg-gray-900">
            <Sidebar />
            <div className="flex flex-col flex-1 w-full">
                <Header />
                <main className="h-full pb-16 overflow-y-auto">
                    <div className="container grid md:px-12 px-4 mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
