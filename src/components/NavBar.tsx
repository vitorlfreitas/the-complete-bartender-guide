"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
    isOpen: boolean;
    toggleMenu: () => void;
}

const NavBar = ({ isOpen, toggleMenu }: Props) => {
    return (
        <header className="fixed z-50 top-0 left-0 w-screen bg-amber-950 lg:bg-transparent text-white md:px-10 lg:py-2">
            <div className="flex justify-between items-center p-5 font-lora font-bold ">
                <Link className="font-bold text-3xl" href={"/"}>
                    VITOR
                    <span className=" text-yellow-800 lg:text-yellow-400">
                        FREITAS
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex space-x-6">
                    <Link
                        href={"/cocktails"}
                        className="hover:text-yellow-500 text-3xl"
                    >
                        Cocktails
                    </Link>
                    <Link
                        href={"/cocktails"}
                        className="hover:text-yellow-500 text-3xl"
                    >
                        Techniques
                    </Link>
                    <Link
                        href={"/cocktails"}
                        className="hover:text-yellow-500 text-3xl"
                    >
                        Contact
                    </Link>
                    
                </nav>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
                    <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="w-8 h-1 bg-gray-100  mb-2" />
                        <div className="w-6 h-1 bg-gray-100  mb-2" />
                        <div className="w-8 h-1 bg-gray-100 " />
                    </motion.div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.ul
                initial={{ height: 0 }}
                animate={{ height: isOpen ? "auto" : 0 }}
                className="lg:hidden absolute top-full left-0 w-full md:w-1/3 md:left-2/3 bg-amber-950 overflow-hidden"
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <li className="p-5 hover:text-yellow-500 hover:bg-gray-100 cursor-pointer text-xl">
                    <Link href={"/cocktails"} >Cocktails</Link>
                </li>
                <li className="p-5 hover:text-yellow-500 hover:bg-gray-100 cursor-pointer text-xl">
                    <Link href={"/techniques"}>Techniques</Link>
                </li>
                <li className="p-5 hover:text-yellow-500 hover:bg-gray-100 cursor-pointer text-xl">
                    <Link href={"/contact"}>Contact</Link>
                </li>
            </motion.ul>
        </header>
    );
};

export default NavBar;
