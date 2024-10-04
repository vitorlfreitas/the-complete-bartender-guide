"use client";

import NavBar from "@/components/NavBar";
import Link from "next/link";
import React from "react";
import useStore from "../../../state/menuStore";

const Cocktails = () => {
    const { isOpen, toggleMenu } = useStore();

    return (
        <>
            <NavBar isOpen={isOpen} toggleMenu={toggleMenu} />
            <h1>Cocktails</h1>
            <Link href={"/"}>Home</Link>
        </>
    );
};

export default Cocktails;
