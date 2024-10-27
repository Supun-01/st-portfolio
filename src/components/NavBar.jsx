import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuButtonTracker = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    const navBarLinks = (
        <div className="md:space-x-4 p-2">
            <a href="#" className="block md:inline transition duration-300 ease-in-out hover:text-cyan-900">Home</a>
            <a href="#" className="block md:inline transition duration-300 ease-in-out hover:text-cyan-900">About</a>
            <a href="#" className="block md:inline transition duration-300 ease-in-out hover:text-cyan-900">Services</a>
            <a href="#" className="block md:inline transition duration-300 ease-in-out hover:text-cyan-900">Contact</a>
        </div>
    );

    return (
        <nav className="bg-blue-gray-200 px-5 md:px-10 py-4">
            <div className="flex flex-wrap lg:container lg:mx-auto justify-between items-center">
                <div>
                    <h1 className="text-2xl">SupunTharaka</h1>
                </div>
                <div className="hidden md:block md:text-lg lg:text-xl">
                    {navBarLinks}
                </div>

                <div className="md:hidden border border-black flex p-1 rounded-lg ">
                    <button onClick={menuButtonTracker}>
                        <IoMdMenu className="text-2xl" />
                    </button>
                </div>
            </div>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'max-h-40' : 'max-h-0'}`}
            >
                <div className="bg-blue-gray-100 mt-2 p-2 rounded-lg">
                    {navBarLinks}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
