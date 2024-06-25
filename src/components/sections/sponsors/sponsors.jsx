"use client";
import Image from "next/image";
import Header from "@/components/header.jsx";
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

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setVisible(false);
            }
        };

        
        if (typeof window !== 'undefined') {
            window.addEventListener('keydown', handleKeyDown);
        }

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
                threshold: 0.1, // Trigger when 10% of the section is visible
            }
        );

        if (currentContentRef) {
            observer.observe(currentContentRef);
        }

        return () => {
            if (currentContentRef) {
                observer.unobserve(currentContentRef);
            }
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <div id="sponsors" ref={contentRef} className="flex flex-col justify-center items-center absolute top-[28.5%] md:top-[30%] lg:top-[33%] pl-[6%] pr-[5%] lg:pl-[10%] lg:pr-[10%] mx-auto w-full h-[16%] md:h-[14%] lg:h-[18%] float-in-section">
                <Header title="Our Sponsors" />
                <p className="text-center leading-relaxed px-2 lg:leading-normal text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-[#FAFAFA] mt-4 lg:mt-6 xl:mt-8 2xl:mt-10 lg:pl-[10%] lg:pr-[10%]">
                    We are grateful to our sponsors for their support; this event would not be possible without them! These contributions will help shape
                    an unforgettable experience for all our attendees.
                </p>
                <p className="text-center leading-relaxed px-2 lg:leading-normal text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-[#FAFAFA] mt-2 md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10 lg:pl-[10%] lg:pr-[10%]">
                    More sponsors will be added soon! Stay tuned!
                </p>
                {typeof document !== 'undefined' && (isVisible ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden"))}
                <a
                    aria-label="Become a Sponsor Button (Sponsorship Package coming soon)"
                    className="text-[#FAFAFA] text-sm lg:text-lg xl:text-xl 2xl:text-2xl mt-4 lg:mt-6 xl:mt-8 2xl:mt-10 bg-green-600 rounded-md shadow-md px-8 py-4 hover:scale-105 hover:bg-green-600 duration-300 ease-in-out"
                    href="/assets/sponsorship-package.pdf"
                    type="application/pdf"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    Become a Sponsor!
                </a>
                <div className="main max-h-[65%] md:max-h-[75%] grid grid-cols-5 grid-rows-5 gap-2 md:gap-4 lg:gap-6 xl:gap-10 2xl:gap-12 items-center justify-center w-full pt-6 lg:pt-10 2xl:pt-14">
                    {sponsors.map((sponsor, index) => {
                        
                    if (sponsor.isEmpty){
                        return (
                            <div
                                key={index}
                                className="col-span-1 h-full w-full rounded-md shadow-md bg-transparent"
                            ></div>  );
                    }else 
                        {
                            return (
                                <button
                                    aria-label={`Link to ${sponsor.fullName}`}
                                    key={index}
                                    className={`flex justify-center items-center ${sponsor.tier === "Tree" ? 'col-span-3' : 'col-span-1 col-start-auto'} ${sponsor.tier === "Sprout" ? 'col-span-2' : 'col-span-1 col-start-auto'} h-full w-full rounded-md shadow-md bg-[#FAFAFA] hover:scale-105 transition-transform duration-300 ease-in-out`}
                                    onClick={() => window.open(sponsor.link, "_blank", 'noopener noreferrer')}
                                >
                                    <Image
                                        src={`/assets/sponsors/${sponsor.logo}`}
                                        alt={sponsor.fullName}
                                        width={1000}
                                        height={1000}
                                        className="object-contain w-full h-full pointer-events-none"
                                    />
                                </button>
                            );
                        
                        }})}
                </div>
            </div>
            <div className="absolute w-[25%] 2xl:w-[17%] left-[77%] md:left-[72%] 2xl:left-[70%] top-[25.8%] md:top-[25.5%] lg:top-[27.6%] 2xl:top-[27.6%]">
                <Image
                    src="/assets/moles/suit_mole.png"
                    alt="TerraHacks Logo"
                    width={1500}
                    height={1500}
                    priority={true}
                    className="w-full"
                />
            </div>
        </>
    );
}