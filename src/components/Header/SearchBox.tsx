import MagnifyingGlassIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon';

const SearchBox = (): JSX.Element => {
    return (
        <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
                <MagnifyingGlassIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <input
                type="search"
                className="pl-8 text-gray-700 text-sm dark:bg-gray-900 h-8 w-full rounded"
                placeholder="Search for projects"
                aria-label="Search"
            />
        </div>
    );
};

export default SearchBox;
