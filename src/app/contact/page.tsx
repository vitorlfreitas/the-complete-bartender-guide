"use client";

import NavBar from "@/components/NavBar";
import useStore from "../../../state/menuStore";

const Contact = () => {
    const { isOpen, toggleMenu } = useStore();

    return (
        <>
            <NavBar isOpen={isOpen} toggleMenu={toggleMenu} />
            <main onClick={isOpen ? toggleMenu : undefined}>
                
            </main>
        </>
    );
};

export default Contact;
