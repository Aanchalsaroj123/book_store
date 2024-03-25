// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// // import { FaConfluence } from "react-icons/fa";
// import { GiBookStorm } from "react-icons/gi";

// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     return (
//         <>
//             <header className="text-gray-600 body-font">
//                 <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">
//                     <Link to="/"
//                         className="flex flex-col items-center text-gray-900 mr-auto cursor-pointer hidden md:block"
//                     >
//                         <GiBookStorm className="text-4xl mb-2" /> {/* Adjust the size of the icon with text-4xl */}
//                         <span className="font-bold text-lg">BOOKS</span> {/* Adjust the size of the text with text-xl */}
//                     </Link>

//                     {/* Navigation - visible on medium and larger screens */}
//                     <div className="md:flex-grow">
//                         <nav className={`md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-gray-400 flex flex-wrap items-center text-base justify-center cursor-pointer hidden md:block md:flex`}>
//                             <Link to="/" className="mr-5 hover:text-gray-900 cursor-pointer">Home</Link>
//                             <Link to="/shop" className="mr-5 hover:text-gray-900 cursor-pointer">Shop</Link>
//                             <Link to="/about" className="mr-5 hover:text-gray-900 cursor-pointer">About</Link>
//                             <Link to="/blog" className="mr-5 hover:text-gray-900 cursor-pointer">Blog</Link>
//                             <Link to="/admin/dashboard" className="mr-5 hover:text-gray-900 cursor-pointer">Sell Your Book</Link>
//                         </nav>
//                     </div>
//                     {/* Mobile Logo and Menu Button - visible on small screens */}
//                     <div className="md:hidden flex">
//                         <Link to="/" className="flex flex-col items-center text-gray-900 cursor-pointer mr-auto">
//                             <GiBookStorm className="text-4xl mb-2" /> {/* Adjust the size of the icon with text-4xl */}
//                             <span className="font-bold text-lg">BOOKS</span> {/* Adjust the size of the text and make it bold */}
//                         </Link>

//                         <button
//                             onClick={toggleMenu}
//                             className="inline-flex items-right  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base cursor-pointer"
//                         >
//                             <svg
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 className="w-6 h-6"
//                                 viewBox="0 0 24 24"
//                             >
//                                 {menuOpen ? (
//                                     <path d="M6 18L18 6M6 6l12 12"></path>
//                                 ) : (
//                                     <path d="M4 6h16M4 12h16m-7 6h7"></path>
//                                 )}
//                             </svg>
//                         </button>

//                         {/* Mobile Navigation - visible on small screens when menu is open */}
//                         <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
//                             <Link to="/" className="block p-2 hover:text-gray-900 cursor-pointer">Home</Link>
//                             <Link to="/shop" className="block p-2 hover:text-gray-900 cursor-pointer">Shop</Link>
//                             <Link to="/about" className="block p-2 hover:text-gray-900 cursor-pointer">About</Link>
//                             <Link to="/blog" className="block p-2 hover:text-gray-900 cursor-pointer">Blog</Link>
//                             <Link to="/admin/dashboard" className="block p-2 hover:text-gray-900 cursor-pointer">Sell Your Book</Link>
//                         </div>
//                     </div>
//                 </div>
//             </header>
//         </>
//     );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiBookStorm } from "react-icons/gi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 1) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`text-gray-600 body-font ${isSticky ? 'sticky top-0 bg-gray-200' : ''}`}>
                {/* <header className={`text-gray-600 body-font ${isSticky ? 'sticky top-0 bg-gray-200 bg-opacity-70' : ''}`}> */}

                <div className="container bg-teal-100 mx-auto flex flex-wrap p-5 flex-col md:flex-row">
                    {/* <Link to="/"
                        className="flex flex-row items-center text-gray-900 mr-auto cursor-pointer hidden md:block"
                    >
                        <GiBookStorm className="text-3xl mb-0 ml-4" /> 
                        <span className="font-bold text-lg">BOOKS</span>     
                                        </Link> */}

                    <Link to="/" className="flex items-center text-gray-900 cursor-pointer hidden md:inline-block">
                        <GiBookStorm className="text-3xl mb-0 ml-4" style={{ display: 'inline-block' }} />
                        <span className="font-bold text-lg ml-2" style={{ display: 'inline-block' }}>BOOKS</span>
                    </Link>


                    {/* Navigation - visible on medium and larger screens */}
                    <div className="md:flex-grow">
                        <nav className={`md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-gray-400 flex flex-wrap items-center text-base justify-center cursor-pointer hidden md:block md:flex`}>
                            <Link to="/" className="mr-5 hover:text-gray-900 cursor-pointer">Home</Link>
                            <Link to="/shop" className="mr-5 hover:text-gray-900 cursor-pointer">Shop</Link>
                            <Link to="/about" className="mr-5 hover:text-gray-900 cursor-pointer">About</Link>
                            <Link to="/blog" className="mr-5 hover:text-gray-900 cursor-pointer">Blog</Link>
                            <Link to="/admin/dashboard" className="mr-5 hover:text-gray-900 cursor-pointer">Sell Your Book</Link>
                        </nav>
                    </div>
                    {/* Mobile Logo and Menu Button - visible on small screens */}
                    <div className="md:hidden flex">
                        <Link to="/" className="flex flex-col items-center text-gray-900 cursor-pointer mr-auto">
                            <GiBookStorm className="text-2xl mb-0" /> {/* Adjust the size of the icon with text-4xl */}
                            <span className="font-bold text-lg">BOOKS</span> {/* Adjust the size of the text and make it bold */}
                        </Link>

                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-right  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base cursor-pointer"
                        >
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                            >
                                {menuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12"></path>
                                ) : (
                                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                                )}
                            </svg>
                        </button>

                        {/* Mobile Navigation - visible on small screens when menu is open */}
                        <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                            <Link to="/" className="block p-2 hover:text-gray-900 cursor-pointer">Home</Link>
                            <Link to="/shop" className="block p-2 hover:text-gray-900 cursor-pointer">Shop</Link>
                            <Link to="/about" className="block p-2 hover:text-gray-900 cursor-pointer">About</Link>
                            <Link to="/blog" className="block p-2 hover:text-gray-900 cursor-pointer">Blog</Link>
                            <Link to="/admin/dashboard" className="block p-2 hover:text-gray-900 cursor-pointer">Sell Your Book</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
