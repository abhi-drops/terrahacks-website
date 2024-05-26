"use client";
import { useState, useEffect, useRef } from "react";
import { Spin as Hamburger } from 'hamburger-react';
import { useClickAway } from 'react-use';
import NavbarLogo from "./navbar-logo";
import PortalBtn from "./portal-btn";

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
            <nav id="website-nav" className="hidden lg:flex flex-row w-full bg-transparent backdrop-blur-laptop text-white font-medium px-10 py-3 3xl:px-20 3xl:py-10 fixed justify-between z-50">
                <div id="nav-items" className="flex flex-row">
                    <ul className="flex justify-center w-full items-center gap-12 3xl:gap-24 ml-4">
                        <li>
                            <NavbarLogo />
                        </li>
                        {navItems.map((item, index) => (
                            <li className="text-md lg:text-xl xl:text-2xl 3xl:text-5xl" key={index}>
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
                <PortalBtn />
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
                    <div id="mobile-nav-items" className="flex flex-col w-full absolute text-white space-y-4 gap-4 top-0 right-0 h-screen items-center mt-16 pt-8 backdrop-blur-mobile">
                        <PortalBtn />
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