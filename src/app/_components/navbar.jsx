"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [navItems, setNavItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/nav-items.json");
                const data = await response.json();
                setNavItems(data);
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <nav id="website-nav" className="hidden w-full lg:flex flex-row bg-transparent backdrop-blur-md text-black font-medium px-10 py-3 fixed justify-between z-50">
                <div id="nav-items" className="flex flex-row">
                    <ul className="flex justify-center w-full items-center gap-12 ml-4">
                        <li>
                            <button onClick={() => {
                                document.scrollingElement.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            >
                                <Image
                                    src="/th_logo.png"
                                    alt="TerraHacks Logo - Redirects to Home"
                                    width={1000}
                                    height={1000}
                                    priority={true}
                                    className="w-16 h-16 hover:animate-spin"
                                    style={{ animationDuration: "2s"}}
                                />
                            </button>
                        </li>
                        {navItems.map((item, index) => (
                            <li className="text-md xl:text-xl" key={index}>
                                <button className="hover:text-brown-300 transition-colors duration-300"
                                    onClick={() => {
                                        var elem = document.getElementById(item.sectionId).offsetTop;
                                        window.scrollTo({ top: elem - 100, behavior: "smooth" });
                                        console.log(item.sectionId);
                                    }}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id="portal-btn" className="flex flex-row items-center">
                    <button
                        className="bg-green-500 text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition-colors duration-300"
                        onClick={() => {console.log("Redirecting to Application Portal")}}
                    >
                        <a href="https://portal.terrahacks.ca" target="_blank" className="w-full h-full">Application Portal</a>
                    </button>
                </div>
            </nav>
            <nav id="mobile-nav">

            </nav>
        </>

    );
}