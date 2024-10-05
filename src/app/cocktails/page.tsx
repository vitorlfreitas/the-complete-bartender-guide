"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Drink } from "@/entities/drinks";
import { getRandomCocktails } from "@/services/cocktailsApi";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import useStore from "../../../state/menuStore";
import Image from "next/image";

const SkeletonCard = () => {
    return (
        <div className="p-2 shadow-lg rounded-lg mx-auto flex flex-col items-center justify-center animate-pulse w-full">
            <div className="w-4/5 h-64 bg-gray-300 rounded-lg my-4"></div>
            <div className="w-3/4 h-8 bg-gray-300 rounded mb-4"></div>
            <div className="w-1/2 h-6 bg-gray-300 rounded mb-2"></div>
        </div>
    );
};

const Cocktails = () => {
    const { isOpen, toggleMenu } = useStore();
    const [cocktails, setCocktails] = useState<Drink[]>([]);
    const [loading, setLoading] = useState(true);
    const [cocktailsToLoad, setCocktailsToLoad] = useState(9);

    const determineCocktailsToLoad = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 640) {
            setCocktailsToLoad(6); // Mobile
        } else if (screenWidth <= 1024) {
            setCocktailsToLoad(8); // Tablet
        } else {
            setCocktailsToLoad(9); // Laptop/Desktop
        }
    };

    useEffect(() => {
        determineCocktailsToLoad();

        setLoading(true);

        const fetchRandomCocktails = async () => {
            const data = await getRandomCocktails(cocktailsToLoad);
            setCocktails(data || []);
            setLoading(false);
        };

        fetchRandomCocktails();

        window.addEventListener("resize", determineCocktailsToLoad);

        return () =>
            window.removeEventListener("resize", determineCocktailsToLoad);
    }, [cocktailsToLoad]);

    const loadMoreCocktails = async () => {
        setLoading(true);
        const newCocktails = await getRandomCocktails(cocktailsToLoad);
        setCocktails((prevCocktails) => [...prevCocktails, ...newCocktails]);
        setLoading(false);
    };

    const cardVariants = {
        initial: {
            opacity: 0.8,
            scale: 1,
            transition: { duration: 0.2 },
        },
        hover: {
            opacity: 1,
            scale: 1.05,
            transition: { duration: 0.2 },
        },
    };

    return (
        <>
            <NavBar isOpen={isOpen} toggleMenu={toggleMenu} />
            <main className="bg-gray-50 py-20 px-4 text-gray-950">
                {/* Breadcrumb */}
                <div className="flex text-lg font-semibold lg:mt-8">
                    <p>
                        <Link className="hover:text-yellow-600" href={"/"}>
                            Home
                        </Link>{" "}
                        /{" "}
                        <span className="border-b-2 border-gray-950">
                            Cocktails
                        </span>
                    </p>
                </div>
                {/* Title of the Page */}
                <h1 className="font-lora font-bold text-5xl mt-6">Cocktails</h1>
                {/* Grid of Cocktails */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto p-2 mt-5 gap-10">
                    {loading
                        ? Array.from({ length: cocktailsToLoad }).map(
                              (_, idx) => <SkeletonCard key={idx} />
                          )
                        : cocktails.map((cocktail) => (
                              <motion.div
                                  key={cocktail.idDrink}
                                  className="p-2 shadow-lg rounded-lg mx-auto flex flex-col items-center justify-center"
                                  variants={cardVariants}
                                  initial="initial"
                                  whileHover="hover"
                                  whileTap={{ scale: 0.95 }}
                              >
                                  <Image
                                    priority
                                      src={
                                          cocktail.strDrinkThumb ??
                                          "/assets/image-unavailable.png"
                                      }
                                      alt={`Image of ${cocktail.strDrink}`}
                                      width={300}
                                      height={300}
                                      className="w-4/5 h-full object-cover rounded-lg shadow"
                                  />
                                  <div className="py-2 text-xl lg:text-2xl font-open-sans w-full text-center">
                                      <h2 className="text-2xl lg:text-3xl font-lora font-bold my-1">
                                          {cocktail.strDrink}
                                      </h2>
                                      <p className="my-1">
                                          <strong>Category: </strong>
                                          {cocktail.strCategory}
                                      </p>
                                      <p>
                                          <strong>IBA: </strong>
                                          {cocktail.strIBA ?? "Normal"}
                                      </p>
                                  </div>
                              </motion.div>
                          ))}
                </div>
                <div className="text-center mt-10">
                    <button
                        onClick={loadMoreCocktails}
                        disabled={loading}
                        className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700"
                    >
                        {loading ? "Loading..." : "Load More"}
                    </button>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Cocktails;
