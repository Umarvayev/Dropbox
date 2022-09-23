import React from 'react';
import { useAuth } from './../store/AuthStore';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/signin");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <nav className="nave bg-black sm:px-4 py-2.5 dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div onClick={() => navigate("/")} className="c2 text-white text-base font-semibold cursor-pointer">
                    My Dropbox
                </div>
                <div className="flex">
                    <div className=" k1 rounded flex items-center justify-center px-3 py-1 border-transparent font-medium text-white bg-blue-600  mr-2">
                        <button onClick={() => navigate("/update-profile")}>Edit Profile</button>
                    </div>
                    <div className="k1 rounded flex items-center justify-center px-3 py-1 border-transparent font-medium text-white bg-blue-600 ">
                        <button onClick={handleLogout}>Sign Out</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
