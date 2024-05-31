"use client";
import Image from "next/image";
import Header from "@/components/header.jsx";
import { useState, useRef, useEffect } from "react";

export default function Sponsors() {
    const contentRef = useRef(null);
    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/sponsors.json");
                const data = await response.json();
                setSponsors(data);
            }
            catch (error) {
                console.error("Failed to fetch sponsors data", error);
            }
        };
        fetchData();

        const currentContentRef = contentRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    contentRef.current.classList.add('float-in-section-visible');
                }
                else {
                    contentRef.current.classList.remove('float-in-section-visible');
                }
            },
            {
                threshold: 0.2, // Trigger when 10% of the section is visible
            }
        );

        if (currentContentRef) {
            observer.observe(currentContentRef);
        }

        return () => {
            if (currentContentRef) {
                observer.unobserve(currentContentRef);
            }
        };
    }, []);

    return (
        <div id="sponsors" ref={contentRef} className="hidden lg:flex flex-col justify-center items-center absolute top-[32%] pl-[10%] pr-[10%] mx-auto w-full h-[18%] float-in-section">
            <Header title="Our Sponsors" />
            <div className="main grid grid-cols-4 grid-rows-4 gap-6 xl:gap-10 2xl:gap-12 items-center justify-center w-full h-full pt-10 2xl:pt-14">
                {sponsors.map((sponsor, index) => {
                    return (
                        <button
                            key={index}
                            className={`flex justify-center items-center ${sponsor.tier === "Platinum" ? 'col-span-2' : 'col-span-1 col-start-auto'} h-full w-full rounded-md shadow-md bg-white hover:scale-105 transition-transform duration-300 ease-in-out`}
                            onClick={() => window.open(sponsor.link, "_blank")}
                        >
                            <Image
                                src={`/assets/sponsors/${sponsor.logo}`}
                                alt={sponsor.fullName}
                                width={1000}
                                height={1000}
                                className="object-contain w-full h-full"
                            />
                        </button>
                    );
                })}
            </div>
        </div>
    );
}