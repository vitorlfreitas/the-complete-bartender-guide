import Link from "next/link";
import React from "react";
import '../../styles/style.css';

const PageHeader = () => {
    return (
        <section className="page-header relative min-h-screen bg-[url('/assets/bg-bartender.webp')] bg-left-bottom bg-no-repeat flex items-center text-gray-100">
            <div className="absolute inset-0 bg-black bg-opacity-50">
                <div className=" relative top-1/4 z-10 m-auto w-4/5 text-center flex flex-col gap-10 md:gap-20 lg:gap-10">
                    <h1 className="font-bold font-lora text-6xl md:text-7xl">
                        The Complete <br />
                        Bartender
                        <br />
                        Guide
                    </h1>
                    <p className="my-5 text-2xl md:text-3xl">
                        Discover the Art of <strong>Mixology</strong> and
                        Elevate Your
                        <strong> Cocktail</strong> Game
                    </p>
                    <Link
                        href={"#"}
                        className="text-2xl md:text-3xl font-semibold bg-yellow-800 w-fit m-auto py-2 px-4 rounded hover:scale-105 transition-transform"
                    >
                        Start Crafting
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
