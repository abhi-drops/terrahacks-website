"use client";
import Image from "next/image";
import Header from "@/components/header.jsx";
import ComingSoon from "@/components/coming-soon.jsx";
import { useState, useRef, useEffect } from "react";

export default function Sponsors() {
    const contentRef = useRef(null);
    const [sponsors, setSponsors] = useState([]);
    const [isVisible, setVisible] = useState(false);

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
        <div id="sponsors" ref={contentRef} className="flex flex-col justify-center items-center absolute top-[36%] lg:top-[33%] pl-[3%] pr-[3%] lg:pl-[10%] lg:pr-[10%] mx-auto w-full h-[10%] lg:h-[18%] float-in-section">
            <Header title="Our Sponsors" />
            <p className="text-center text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-white mt-4 lg:mt-6 xl:mt-8 2xl:mt-10 lg:pl-[10%] lg:pr-[10%]">
                We are grateful to our sponsors for their support; this event would not be possible without them! These contributions will help shape
                an unforgettable experience for all our attendees. <br /> <br /> More sponsors will be added soon!
            </p>
            {typeof document !== 'undefined' && (isVisible ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden"))}
            <button
                className="text-white text-sm lg:text-lg xl:text-xl 2xl:text-2xl mt-4 lg:mt-6 xl:mt-8 2xl:mt-10 bg-green-500 rounded-md shadow-md px-8 py-4 hover:scale-105 hover:bg-green-600 duration-300 ease-in-out"
                onClick={() => {
                    var elem = document.getElementById('sponsors').offsetTop;
                    window.scrollTo({ top: elem, behavior: "smooth" });
                    setVisible(!isVisible);
                }}
            >
                Become a Sponsor!
            </button>
            {isVisible && <ComingSoon isVisible={isVisible} setVisible={setVisible} />}
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