"use client";
import { useState, useEffect, useRef } from "react";
import { Spin as Hamburger } from 'hamburger-react';
import { useClickAway } from 'react-use';
import NavbarLogo from "@/app/_components/navbar-logo";

export default function Navbar() {
    const [navItems, setNavItems] = useState([]);
    const [isExpandedMobile, setIsExpandedMobile] = useState(false);

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

    // For closing the dropdown menu when clicking outside of it
    const ref = useRef(null);
    useClickAway(ref, () => {
        setIsExpandedMobile(false);
    });

    return (
        <>
            <nav id="website-nav" className="hidden lg:flex flex-row w-full bg-transparent backdrop-blur-md text-white font-medium px-10 py-3 fixed justify-between z-50">
                <div id="nav-items" className="flex flex-row">
                    <ul className="flex justify-center w-full items-center gap-12 ml-4">
                        <li>
                            <NavbarLogo />
                        </li>
                        {navItems.map((item, index) => (
                            <li className="text-md lg:text-xl xl:text-2xl" key={index}>
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
                <div id="portal-btn" className="flex flex-row items-center text-lg xl:text-xl">
                    <button
                        className="bg-green-500 text-white font-semibold px-6 py-4 rounded-md shadow-md border border-blue-300 hover:bg-green-600 transition-colors duration-300"
                        onClick={() => {
                            window.open("https://portal.terrahacks.ca", "_blank");
                        }}
                    >
                        Application Portal
                    </button>
                </div>
            </nav>
            <nav id="mobile-nav" ref={ref} className={`flex lg:hidden flex-row w-full backdrop-blur-mobile text-white font-medium px-5 lg:px-10 py-3 fixed justify-between h-16 z-50`}>
                <NavbarLogo />
                <Hamburger
                    toggled={isExpandedMobile}
                    toggle={setIsExpandedMobile}
                    duration={0.5}
                    rounded
                    color="#fff"
                    size={28}
                />
                {typeof document !== 'undefined' && (isExpandedMobile ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden"))}
                {isExpandedMobile && (
                    <div id="mobile-nav-items" className="flex flex-col w-full absolute text-white space-y-4 gap-4 top-0 right-0 h-screen items-center mt-16 pt-4 backdrop-blur-mobile">
                        <button
                            className="bg-green-500 text-white font-semibold px-6 py-4 rounded-md shadow-md border border-blue-300 hover:bg-green-600 transition-colors duration-300"
                            onClick={() => {
                                window.open("https://portal.terrahacks.ca", "_blank");
                            }}
                        >
                            Application Portal
                        </button>
                        {navItems.map((item, index) => (
                            <button className="text-xl hover:text-brown-300 transition-colors duration-300" key={index}
                                onClick={() => {
                                    var elem = document.getElementById(item.sectionId).offsetTop;
                                    window.scrollTo({ top: elem - 100, behavior: "smooth" });
                                    setIsExpandedMobile(false);
                                    console.log(item.sectionId);
                                }}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </nav>
        </>
    );
}