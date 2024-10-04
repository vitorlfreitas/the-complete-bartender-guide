"use client";

import NavBar from "@/components/NavBar";
import PageHeader from "@/components/PageHeader";
import useStore from "../../state/menuStore";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
    
    const { isOpen, toggleMenu } = useStore();

    return (
        <>
            <NavBar isOpen={isOpen} toggleMenu={toggleMenu} />
            <main onClick={isOpen ? toggleMenu : undefined}>
                <PageHeader />
            </main>
            <footer className="bg-gray-900 py-2 text-center text-gray-200">
              <p className="  font-thin font-open-sans ">Copyright &copy;  2024</p>
              <p className="  font-thin font-open-sans mt-1">Developed by Vitor Freitas</p>
              <a href="https://vitorlfreitas.vercel.app" target="_blank" className="flex items-center gap-2 justify-center my-2 hover:underline"><FiExternalLink />vitorlfreitas Website</a>
              <ul className="flex justify-center items-center text-white gap-4 text-xl my-2">
                <a href="https://github.com/vitorlfreitas" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://instagram.com/vitor.lfreitas" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/vitorlfreitas" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>

              </ul>
            </footer>

        </>
    );
}
