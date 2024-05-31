"use client";
import { useRef, useEffect } from "react";
import Header from "@/components/header.jsx";

export default function About() {
    const contentRef = useRef(null);

    useEffect(() => {
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

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => {
            if (contentRef.current) {
                observer.unobserve(contentRef.current);
            }
        };
    }, []);

    return (
        <div id="about" ref={contentRef} className="hidden lg:flex flex-col justify-center items-center absolute top-[18.2%] 2xl:top-[17.5%] pl-[35%] pr-[23%] 2xl:pl-[39%] 2xl:pr-[27%] mx-auto w-full h-[8%] float-in-section">
            <Header title="About TerraHacks" />
            <p
                className={`pt-8 2xl:pt-12 lg:text-sm xl:text-base 3xl:text-lg text-white`}
            >
                Formed from the passion of making tech opportunities open to all, TerraHacks was
                created to provide an inclusive platform for everyone interested in technology to further their skills.
                <br /> <br />
                Over the 36-hour period, you'll collaborate with fellow participants, tackle intriguing challenges, and
                bring your ideas to life . Prepare to immerse yourself in a challenging, creative, and exciting weekend!
                <br /> <br />
                And lastly, no experience is required! This event is for anyone and everyone; regardless
                of your background or skill level, come join us! See you all in August😉
            </p>
        </div>
    );
}