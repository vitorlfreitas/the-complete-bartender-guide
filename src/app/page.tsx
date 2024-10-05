"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import PageHeader from "@/components/PageHeader";
import useStore from "../../state/menuStore";

export default function Home() {
    
    const { isOpen, toggleMenu } = useStore();

    return (
        <>
            <NavBar isOpen={isOpen} toggleMenu={toggleMenu} />
            <main onClick={isOpen ? toggleMenu : undefined}>
                <PageHeader />
            </main>
            <Footer />

        </>
    );
}
