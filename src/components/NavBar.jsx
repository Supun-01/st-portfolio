import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuButtonTracker = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    const navBarLinks = (
        <div className="md:space-x-4">
            <a href="#" className="block md:inline transition duration-300 ease-in-out hover:text-pink-900">Home</a>
            <a href="#" className="block md:inline transition duration-300 ease-in-out hover:text-pink-900">About</a>
            <a href="#" className="block md:inline transition duration-300 ease-in-out hover:text-pink-900">Services</a>
            <a href="#" className="block md:inline transition duration-300 ease-in-out hover:text-pink-900">Contact</a>
        </div>
    );

    return (
        <nav className="bg-blue-gray-200 p-4">
            <div className="flex flex-wrap justify-between items-center container mx-auto">
                <div>
                    <h1 className="text-2xl">MyFirst</h1>
                </div>
                <div className="hidden md:block">
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
