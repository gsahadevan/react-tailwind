import ChatNotification from './ChatNotification';
import Notification from './Notification';
import Profile from './Profile';
// import SearchBox from "./SearchBox";
import ThemeToggler from './ThemeToggler';

const Header = (): JSX.Element => {
    return (
        <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
            <div className="container flex items-center justify-end h-full md:px-12 px-4 mx-auto text-purple-600 dark:text-purple-300">
                {/* <!-- Search input --> */}
                {/* <div className="flex justify-center"> */}
                {/*     <SearchBox /> */}
                {/* </div> */}
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
};

export default Header;
