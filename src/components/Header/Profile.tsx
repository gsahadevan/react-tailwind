const Profile = (): JSX.Element => {
    return (
        <>
            <div className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple cursor-pointer">
                <span className="sr-only">Open user menu</span>
                <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                    alt=""
                />
            </div>
        </>
    );
};

export default Profile;
