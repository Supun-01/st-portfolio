import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-white text-lg font-bold">My Website</h1>
                <div className="hidden md:flex space-x-6">
                    <a href="#home" className="text-white">Home</a>
                    <a href="#about" className="text-white">About</a>
                    <a href="#services" className="text-white">Services</a>
                    <a href="#contact" className="text-white">Contact</a>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white"
                >
                    Menu
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
                <a href="#home" className="block text-white p-2">Home</a>
                <a href="#about" className="block text-white p-2">About</a>
                <a href="#services" className="block text-white p-2">Services</a>
                <a href="#contact" className="block text-white p-2">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
